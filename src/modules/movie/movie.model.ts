import { Schema, model, connect } from "mongoose";
import { TMovie, TReview } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";

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
  slug: { type: String }, // Ensure slugs are unique
  isDeleted: { type: Boolean, default: false }, // Default value for isDeleted
  viewCount: { type: Number, default: 0 }, // Default value for viewCount
  reviews: [reviewSchema], // Embed the Review schema as an array
});

//creating slug
movieSchema.pre("save", async function (next) {
  //title -releaseDate
  // create slug based on title and release_date
  const date = format(new Date(this.releaseDate), "dd/MM/yyyy");
  // creating slug
  this.slug = slugify(`${this.title}-${date}`, {
    lower: true,
  });
  next();
});
// Create the Movie model
export const Movie = model<TMovie>("Movie", movieSchema);
