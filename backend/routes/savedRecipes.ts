import { Router } from "express";
import checkAuth from "../middleware/checkAuth";
import getSavedRecipes from "../controllers/saved-recipes/getSavedRecipes";
import createSavedRecipe from "../controllers/saved-recipes/createSavedRecipe";

const savedRecipes = Router();

savedRecipes.get("/:userId", [checkAuth], getSavedRecipes);
savedRecipes.post("/", [checkAuth], createSavedRecipe);

export default savedRecipes;
