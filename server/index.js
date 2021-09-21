import express from "express";
import cors from "cors";
import connection from "./db/conn.js";
import Router from "./routes/index.js";

const app = express();

const PORT = 3500;

// midleware
app.use(cors());
app.use(express.json());
app.use("/", Router);

// port listen
app.listen(PORT, () => console.log(`server is up on http://localhost:${PORT}`));
