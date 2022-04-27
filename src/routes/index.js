import app from "express";
import Home from "./coffee_home.js";
import Coffee from "./coffee_routes.js";

const routes = app.Router();

// routes.use("/", Home);
routes.use("/coffee", Coffee);

export default routes;
