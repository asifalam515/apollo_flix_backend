import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format, compareAsc } from "date-fns";
import slugify from "slugify";

const createMovieToDB = async (movieData: TMovie) => {
  //title -releaseDate
  // create slug based on title and release_date
  const date = format(new Date(movieData.releaseDate), "dd/MM/yyyy");
  // creating slug
  const slug = slugify(`${movieData.title}-${date}`, {
    lower: true,
  });
  console.log(slug);
  const result = await Movie.create({ ...movieData, slug });
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
