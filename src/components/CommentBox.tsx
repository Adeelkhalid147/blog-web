"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useId } from "react";
import { Inputs } from "./shared/types";

const CommentBox = (props: any) => {
  // console.log("props data : ", props);
  const [sunmitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const id = useId();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log("Submitted Data:", data);
    // console.log("Props _id:", props._id);
    // console.log("Generated ID:", id);
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitted(false);
      });
  };

  return (
    <div>
      <p className="text-xs text-secondaryColor uppercase font-titleFont">
        Enjoyed this article?
      </p>
      <h3 className="font-titleFont text-3xl font-bold uppercase">
        Leave a comment below!
      </h3>
      <hr className="py-3 mt-2" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-7 flex flex-col gap-6"
      >
        {/* Hidden input for _id */}
        <input type="hidden" {...register("_id", { value: id })} />

        {/* Name Input */}
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Name</span>
          <input
            {...register("name", { required: true })}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            type="text"
            placeholder="Enter your name"
          />
        </label>

        {/* Email Input */}
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">Email</span>
          <input
            {...register("email", { required: true })}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            type="email"
            placeholder="Enter your Email"
          />
        </label>

        {/* Comment Input */}
        <label className="flex flex-col">
          <span className="font-titleFont font-semibold text-base">
            Comment
          </span>
          <textarea
            {...register("comment", { required: true })}
            className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
            placeholder="Enter your Comment"
            rows={6}
          />
        </label>

        {/* Submit Button */}
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

// "use client";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Inputs } from "./shared/types";

// const CommentBox = (props: any) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log("Submitted Data:", data);

//   };

//   return (
//     <div>
//       <p className="text-xs text-secondaryColor uppercase font-titleFont">
//         Enjoyed this article?
//       </p>
//       <h3 className="font-titleFont text-3xl font-bold uppercase">
//         Leave a comment below!
//       </h3>
//       <hr className="py-3 mt-2" />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mt-7 flex flex-col gap-6"
//       >

//         {/* Hidden input for _id */}
//         <input type="hidden" {...register("_id")} value={props._id} />

//         {/* Name Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">Name</span>
//           <input
//             {...register("name", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             type="text"
//             placeholder="Enter your name"
//           />
//         </label>

//         {/* Email Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">Email</span>
//           <input
//             {...register("email", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             type="email"
//             placeholder="Enter your Email"
//           />
//         </label>

//         {/* Comment Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">
//             Comment
//           </span>
//           <textarea
//             {...register("comment", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             placeholder="Enter your Comment"
//             rows={6}
//           />
//         </label>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CommentBox;

// "use client"
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Inputs } from "./shared/types";

// const CommentBox = (props: { _id: string }) => {
//   console.log("props data : ",props)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log("Submitted Data:", data);
//     console.log("Props _id:", props._id);
//   };

//   return (
//     <div>
//       <p className="text-xs text-secondaryColor uppercase font-titleFont">
//         Enjoyed this article?
//       </p>
//       <h3 className="font-titleFont text-3xl font-bold uppercase">
//         Leave a comment below!
//       </h3>
//       <hr className="py-3 mt-2" />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mt-7 flex flex-col gap-6"
//       >
//         {/* Hidden input for _id */}
//         <input type="hidden" {...register("_id", { value: props._id })} />

//         {/* Name Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">Name</span>
//           <input
//             {...register("name", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             type="text"
//             placeholder="Enter your name"
//           />
//         </label>

//         {/* Email Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">Email</span>
//           <input
//             {...register("email", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             type="email"
//             placeholder="Enter your Email"
//           />
//         </label>

//         {/* Comment Input */}
//         <label className="flex flex-col">
//           <span className="font-titleFont font-semibold text-base">
//             Comment
//           </span>
//           <textarea
//             {...register("comment", { required: true })}
//             className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
//             placeholder="Enter your Comment"
//             rows={6}
//           />
//         </label>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CommentBox;
