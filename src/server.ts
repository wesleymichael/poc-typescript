import express from "express";
import cors from "cors";
import { moviesRouter } from "@/routers";

const app = express();
app
    .use(express.json())
    .use(cors())
    .get("/health", (_req, res) => res.send("Ok"))
    .use(moviesRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});