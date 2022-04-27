import app from "express";
import Coffee from "./coffee_routes.js";

const routes = app.Router();

routes.use("/coffee", Coffee);

export default routes;
