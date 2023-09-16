import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { IProduct } from "./shared/types";
// import { getProductData } from "@/app/page";
import Link from "next/link";
import { client } from "../../sanity/lib/client";

async function getProductData() {
  let query = await client.fetch(
    `*[_type == "post"]{_id,title,author -> {name,image},description,mainImage,slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return query;
}






const ProductCarousel = async () => {
  let data: IProduct[] = await getProductData();
  console.log("dataAA:", data);
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-3">
      {data.map((post: any, index: number) => (
        <Link key={index} href={`/post/${post.slug.current}`}>
          <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group">
            <div className="h-3/5 w-full overflow-hidden">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.mainImage.alt}
                height={350}
                width={350}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
              />
            </div>
            <div className="h-2/5 w-full flex flex-col justify-center">
              <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500">
                <p>{post.title}</p>
                <Image
                  className="w-12 h-12 rounded-full"
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.image.alt}
                  height={1000}
                  width={1000}
                />
              </div>
              <p className="py-2 px-4 text-base">
                {post.description.substring(0,60)}... by -
                <span className="font-semibold">{post.author.name}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCarousel;
