import { Schema, model, connect } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

// Define the Review schema
const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
});

// Define the Movie schema
const movieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // Ensure slugs are unique
  isDeleted: { type: Boolean, default: false }, // Default value for isDeleted
  viewCount: { type: Number, default: 0 }, // Default value for viewCount
  reviews: [reviewSchema], // Embed the Review schema as an array
});

// Create the Movie model
export const Movie = model<TMovie>("Movie", movieSchema);
