import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  BsYoutube,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#34495E] text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center justify-center gap-3">
          <p className="text-xl font-bold">AK</p>
          <p>
            © 2023 Adeelkhalid ||
            all rights reserved
          </p>
        </div>
        <div className="flex gap-6">
          
          <BsFacebook className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
