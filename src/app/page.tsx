import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import BannerBottom from "@/components/BannerBottom";
import { client } from "../../sanity/lib/client";

import ProductCarousel from "@/components/ProductCarousel";
import { IProduct } from "@/components/shared/types";




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

export default async function Home() {
  let data: IProduct[] = await getProductData();
  // console.log("dataAA:", data);

  return (
    <div>
      <Header />
      {/* <Banner /> */}
      {/* <div className="max-w-7xl mx-auto h-60 relative">
        <BannerBottom />
      </div> */}
      <ProductCarousel />
      
      {/* <Footer /> */}
    </div>
  );
}

//
