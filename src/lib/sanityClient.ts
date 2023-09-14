import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';
// import { apiVersion, dataset,projectId,useCdn } from ''

export const config = createClient({
  apiVersion: "v2023-09-13",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: true,
});


export const urlFor = (source:any) => createImageUrlBuilder(config).image(source)
