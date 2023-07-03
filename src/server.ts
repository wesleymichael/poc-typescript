import express from "express";
import cors from "cors";
import { moviesRouter } from "@/routers";

const app = express();
app
    .use(express.json())
    .use(cors())
    .use(moviesRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});