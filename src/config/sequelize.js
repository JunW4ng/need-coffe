import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://postgres:Junjie1995@localhost:5432/coffee-app"
);

export default sequelize;
