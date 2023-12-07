import { Router } from "express";
import usersRouter from "../routes/users";
import savedRecipes from "../routes/savedRecipes";
import customRecipes from "../routes/customRecipes";

const routes = Router();

routes.use("/api/v1/users", usersRouter);
routes.use("/api/v1/saved-recipes", savedRecipes);
routes.use("/api/v1/custom-recipes", customRecipes);

export default routes;
