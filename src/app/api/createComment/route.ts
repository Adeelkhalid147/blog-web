// import { createClient } from "@sanity/client"
// import { NextRequest, NextResponse } from "next/server";




// const client = createClient({
//     apiVersion: "v2023-09-13",
//     dataset: "production",
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     token: process.env.SANITY_ACCESS_TOKEN,
//     useCdn: true,
//   });

//   export default async function createComment(req:NextRequest, res:NextResponse){
//     const {_id,name,email,comment } = JSON.parse(req.body)
//     try {
//         await client.create({
//             _type:"comment",
//             post:{
//                 _type: "referance",
//                 _ref:_id,
//             },
//             name,email,comment
//         })              
        
//     } catch (error) {
//         console.log("Error: " , error)
//         return res.status(500).json({message: "Could not submit comment",error})
        
//     }
//     console.log("Comment Submitted")
//     return res.status(200).json({message: "Comment SUbmitted"})
//   }