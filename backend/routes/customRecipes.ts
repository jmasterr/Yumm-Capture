import { Router } from "express";
import checkAuth from "../middleware/checkAuth";
import getCustomRecipe from "../controllers/custom-recipes/getCustomRecipe";
import getCustomRecipes from "../controllers/custom-recipes/getCustomRecipes";
import createCustomRecipe from "../controllers/custom-recipes/createCustomRecipe";
import updateCustomRecipe from "../controllers/custom-recipes/updateCustomRecipe";
import deleteCustomRecipe from "../controllers/custom-recipes/deleteCustomRecipe";

const customRecipes = Router();

customRecipes.get("/:userId", [checkAuth], getCustomRecipes);
customRecipes.get("/:id", [checkAuth], getCustomRecipe);
customRecipes.post("/", [checkAuth], createCustomRecipe);
customRecipes.put("/:id", [checkAuth], updateCustomRecipe);
customRecipes.delete("/:id", [checkAuth], deleteCustomRecipe);

export default customRecipes;
