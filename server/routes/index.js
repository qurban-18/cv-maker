import {} from "dotenv/config";
import express from "express";
import { create, search } from "../controllers/index.js";

const Router = express.Router();

Router.post("/create", create);
Router.post("/search", search);

export default Router;
