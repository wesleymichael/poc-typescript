import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesRepository from "@/repositories/movies-repository";

export async function getAllMovies(req: Request, res: Response){
    try{
        const results = await moviesRepository.getAllMoviesDB();
        return res.send(results);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}
