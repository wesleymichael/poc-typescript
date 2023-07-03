import { connection } from "@/config/database";

async function getAllMoviesDB(){
    const results = await connection.query(`SELECT * FROM movies;`);
    return results.rows;
}

const moviesRepository = {
    getAllMoviesDB,
}

export default moviesRepository;