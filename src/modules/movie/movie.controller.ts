import express, { Request, Response } from "express";
import { movieService } from "./movie.service";
const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;
    const result = await movieService.createMovieToDB(movieData);

    res.status(200).json({
      success: true,
      message: "Moive has been created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getMovies = async (req: Request, res: Response) => {
  try {
    const result = await movieService.getMoviesFromDB();
    res.status(200).json({
      success: true,
      message: "retrive all movie data",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleMovie = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await movieService.getSingleMovieFromDB(slug);
    res.status(200).json({
      success: true,
      message: "Retrive single Movie",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const MovieController = {
  createMovie,
  getMovies,
  getSingleMovie,
};
