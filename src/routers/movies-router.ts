import { addMovie, getAllMovies } from "@/controllers/index";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getAllMovies);
moviesRouter.post("/addMovie", addMovie);

export { moviesRouter };
