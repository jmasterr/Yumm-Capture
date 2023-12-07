import API_URL from "../../../constants/API_URL.js";
import SavedRecipesEndpoints from "./SavedRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const createSavedRecipes = async (recipe, userId) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    timeout: 30000,
    timeoutErrorMessage: "An error occurred. Please try again later.",
  };

  const data = {
    title: recipe.title,
    directions: recipe.directions,
    apiId: recipe.id.toString(),
    calories: recipe.calories.toString() || "0",
    photoUrl: recipe.photoUrl,
    user: userId,
  };

  return await axios.post(
    `${API_URL}${SavedRecipesEndpoints.CREATE_SAVED_RECIPE}`,
    data,
    config
  );
};

export default createSavedRecipes;
