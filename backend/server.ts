import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/db";
import routes from "./config/routes";
import seedInitialUser from "./config/seedInitialUser";

const app = express();

// Parse incoming request bodies in a middleware before your handlers,
// available under the req.body property
app.use(bodyParser.json());

app.use(express.json());

app.use(
  "*",
  cors({
    // origin: origins,
  })
);

db();
seedInitialUser().then(() =>
  console.log(colors.blue("Initial user seed file ran 🌱"))
);
app.use(routes);

const port = 6230;

app.listen(port, () =>
  console.log(colors.green(`App running on port ${port} 🚀!`))
);
