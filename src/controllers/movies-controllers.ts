import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesRepository from "@/repositories/movies-repository";
import movieService from "@/services/movie-service";

export async function getAllMovies(req: Request, res: Response){
    try{
        const results = await moviesRepository.getAllMoviesDB();
        return res.send(results.rows);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function addMovie(req: Request, res: Response){
    const {name, genre, status, platform} = req.body
    const movie = {name, genre, status, platform}
    try{
        await movieService.validateUniqueMovieName(name);

        await moviesRepository.insertMovieDB(movie);
        return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        if(error.name === 'DuplicatedMovieError') {
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}