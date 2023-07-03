import { getAllMovies } from "@/controllers/index";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getAllMovies);
moviesRouter.get("/health", (_req, res) => res.send("Ok"))

export { moviesRouter };
