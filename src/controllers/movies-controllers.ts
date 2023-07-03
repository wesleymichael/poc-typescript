import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesRepository from "@/repositories/movies-repository";

export async function getAllMovies(req: Request, res: Response){
    try{
        const results = await moviesRepository.getAllMoviesDB();
        return res.send(results.rows);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

//type newMovie = Omit<Movie, 'id'>;
export async function addMovie(req: Request, res: Response){
    const {name, genre, status, platform} = req.body
    const movie = {name, genre, status, platform}
    try{
        await moviesRepository.insertMovieDB(movie);
        return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}