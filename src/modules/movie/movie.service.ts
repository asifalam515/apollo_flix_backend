import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format, compareAsc } from "date-fns";
import slugify from "slugify";

const createMovieToDB = async (movieData: TMovie) => {
  const result = await Movie.create(movieData);
  return result;
};
const getMoviesFromDB = async () => {
  const result = await Movie.find();
  return result;
};
const getSingleMovieFromDB = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};
export const movieService = {
  createMovieToDB,
  getMoviesFromDB,
  getSingleMovieFromDB,
};
