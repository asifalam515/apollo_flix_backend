import { Schema, model, connect } from "mongoose";
export interface TReview {
  email: string;
  rating: number;
  comment: string;
}

export interface TMovie {
  title: string;
  description: string;
  releaseDate: Date; // or you can use `Date` if you plan to convert the string to a Date object
  genre: string;
  slug: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: [TReview];
}
