import app from "express";
import CoffeeControler from "../controllers/coffee_controller.js";

const routes = app.Router();

routes.get("/:isHotOrIced", new CoffeeControler().hotCoffee);

export default routes;
