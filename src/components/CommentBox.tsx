"use client";
import { client } from "../../sanity/lib/client";
import React, { FC, useEffect,useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct, Input } from "./shared/types";









const onSubmit: SubmitHandler<Input> = (data)=>{
  // console.log("dataaaaaaaaa : ",data)
}

const CommentBox= () => {
 
  
  
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

 

  
  return (
    
    <div>
      <p className="text-xs text-secondaryColor uppercase font-titleFont">
        Enjoyed this article?
      </p>
      <h3 className="font-titleFont text-3xl font-bold uppercase">
        leave a comment below!
      </h3>
      <hr className="py-3 mt-2" />
      {/* form data start */}
      {/* Generting Id for hooks form*/}
      {/* <input {...register("_id")}
      type="hidden"
      value={fetchData._id}/> */}
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex flex-col gap-6">
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Name</span>
          <input
          {...(register("name"), {required:true})}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl chadow-secondaryColor"
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Email</span>
          <input
          {...(register("email"), {required:true})}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl chadow-secondaryColor"
            type="email"
            placeholder="Enter your Email"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">
            Comment
          </span>
          <textarea
          {...(register("comment"), {required:true})}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl chadow-secondaryColor"
            placeholder="Enter your Email"
            rows={6}
          />
        </label>
        <button
          type="submit"
          className="w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
