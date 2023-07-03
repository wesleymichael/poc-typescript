import moviesRepository from "@/repositories/movies-repository";
import { duplicatedMovieError } from "./error";

export async function validateUniqueMovieName(name: string){
    const result = await moviesRepository.getMovieByNameDB(name);
    if(result.rowCount !== 0){
        throw duplicatedMovieError();
    }
}

const movieService = {
    validateUniqueMovieName,
}

export default movieService;