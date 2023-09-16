"use client";
import Image from "next/image";
import React, { useRef } from "react";
import bannerImgFour from "../../public/bannerImgFour.jpg";
import bannerImgOne from "../../public/bannerImgOne.jpg";
import bannerImgThree from "../../public/bannerImgThree.jpg";
import bannerImgTwo from "../../public/bannerImgTwo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";








const Banner = () => {
  const sliderRef = useRef<Slider | null>(null);
  // console.log(sliderRef.current)

  const nextSlide = ()=>{
    if (sliderRef.current) {
    sliderRef.current.slickNext()
    }
  }
  const previousSlide = ()=>{
    if (sliderRef.current) {
    sliderRef.current.slickPrev()
  }
}

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  className="w-full h-auto md:h-[650px] relative">
      {/*  NEXT button div */}
      <div onClick={nextSlide} className="flex justify-between px-2 w-44 h-8 absolute bottom-32 z-30 right-10 border-[1px] border-gray-900 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden">
        <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group ">
          <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
            next
          </span>
          <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
            next
          </span>
          <span className="text-lg">
            <FaChevronRight />
          </span>
        </div>
      </div>

      {/*  Previous button div */}
      <div onClick={previousSlide} className="w-44 h-8 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden">
            <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group ">
              <span className="text-lg"> <FaChevronLeft /></span>
                <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">Previous</span>
                <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">Previous</span>
            </div>
        </div>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgOne}
            alt="bannerImgOne"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgTwo}
            alt="bannerImgTwo"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgThree}
            alt="bannerImgThree"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            alt="bannerImgFour"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
