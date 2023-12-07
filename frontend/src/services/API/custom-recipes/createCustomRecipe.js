import API_URL from "../../../constants/API_URL.js";
import CustomRecipesEndpoints from "./CustomRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const createCustomRecipe = async (recipe, userId) => {
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
    calories: recipe.calories,
    user: userId,
  };

  return await axios.post(
    `${API_URL}${CustomRecipesEndpoints.CREATE_CUSTOM_RECIPES}`,
    data,
    config
  );
};

export default createCustomRecipe;
