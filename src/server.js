import express, { json } from "express";

import routes from "./routes/index.js";

const app = express();

app.use(json());

const PORT = 3000;

app.use("/", routes);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
