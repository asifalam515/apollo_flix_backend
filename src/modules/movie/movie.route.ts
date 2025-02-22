import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
import { MovieController } from "./movie.controller";
const router = express.Router();

router.post("/create-movie", MovieController.createMovie);
router.get("/movies", MovieController.getMovies);
router.get("/movies/:slug", MovieController.getSingleMovie);

export const MovieRoute = router;
