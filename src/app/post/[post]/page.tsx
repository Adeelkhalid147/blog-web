import React from "react";
import { client } from "../../../../sanity/lib/client";
import { IProduct } from "@/components/shared/types";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import PortableText from "react-portable-text";

async function getProductData() {
  let query = await client.fetch(
    `*[_type == "post"]{_id,title,author -> {name,image},description,mainImage,slug,body}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return query;
}

const Post = async ({ params }: { params: any }) => {
  let data: any = await getProductData();
  // console.log("####data: ",data)
  const filterData = data.find(
    (post: any) =>
      // console.log("filter******* : ",post)
      post.slug.current == params.post
  );
  // console.log("paramsss&filterData :  ",filterData)
  // console.log("dataaaa&&&&&&& :  ",data)
  return (
    <div>
      {/* main image */}
      <div>
        <Image
          src={urlForImage(filterData.mainImage).url()}
          alt={filterData.mainImage.alt}
          height={1000}
          width={1000}
          className="w-full h-96 object-cover"
        />
        {/* Article */}
        <div className="max-w-3xl mx-auto">
          <article className="w-full mx-auto p-5 bg-secondaryColor/10">
            <h1 className="font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">
              {filterData.title}
            </h1>
            <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2">
              {filterData.description}
            </h2>
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full w-12 h-12 object-cover bg-red-400"
                src={urlForImage(filterData.author.image).url()}
                alt={filterData.author.image.alt}
                height={1000}
                width={1000}
              />
              <p className="font-bodyFont text-base">
                Blog post by <span>{filterData.author.name}</span>- Published at{" "}
                {new Date(filterData.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-10">
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET }
                projectId={
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
                }
                content={filterData.body}
                serializers={{
                  h1: (props:any) =>(
                    <h1 className="text-3xl font-bold my-5 font-titleFont"
                    {...props}
                    />
                  ),
                  h2: (props:any) =>(
                     <h2 className="text-2xl font-bold my-5 font-titleFont"
                    {...props}
                    />
                  ),
                  h3: (props:any) => (
                    <h3 className="text-2xl font-bold my-5 font-titleFont"
                    {...props}
                    />
                  ),
                  li: ({children }: any) =>(
                    <li className="ml-4 list-disc">{children}</li>
                  ),
                  link: ({ href, children }:any) =>(
                    <a href={href} className="text-cyan-500 hover:underline">
                       {children}
                     </a>
                  ),
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Post;
