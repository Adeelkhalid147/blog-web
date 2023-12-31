import { Image as IImage } from "sanity";

export interface IProduct {
  title: string;
  description: string;
  _id: string;
  author: string;
  mainImage: IImage;
}

export type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};
