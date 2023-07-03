import { db } from "@/config/database";
import { Movie } from "@/protocols";

async function getAllMoviesDB(){
    const results = await db.query(`SELECT * FROM movies;`);
    return results;
}

async function insertMovieDB(movie: Movie) {
    const results = await db.query(`
        INSERT INTO "movies" (name, genre, status, platform)
            VALUES ($1, $2, $3, $4);
    `, [movie.name, movie.genre, movie.status, movie.platform]);
    return results;
}

async function getMovieByNameDB(name: string){
    const results = await db.query(`
        SELECT * FROM "movies"
            WHERE name = $1;
    `, [name]);
    return results;
}

const moviesRepository = {
    getAllMoviesDB,
    insertMovieDB,
    getMovieByNameDB,
}

export default moviesRepository;
