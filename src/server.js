import express, { json } from "express";
import routes from "./routes/index.js";
import sequelize from "./config/sequelize.js";
import path from "path";
import "./config/enviroment.js";
import "./models/index.js";

const app = express();

// __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DB
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", routes);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
