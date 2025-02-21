import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovieToDB = async (movieData: TMovie) => {
  const result = await Movie.create(movieData);
  return result;
};
const getMoviesFromDB = async () => {
  const result = await Movie.find();
  return result;
};
const getSingleMovieFromDB = async (movieId: string) => {
  const result = await Movie.findOne({ _id: movieId });
  return result;
};
export const movieService = {
  createMovieToDB,
  getMoviesFromDB,
  getSingleMovieFromDB,
};
