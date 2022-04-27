import { DataTypes, Op } from "sequelize";
import sequelize from "../config/sequelize.js";
import Coffee from "../models/coffee_model.js";

const models = Coffee(sequelize, DataTypes);

export { sequelize, Op };
export default models;