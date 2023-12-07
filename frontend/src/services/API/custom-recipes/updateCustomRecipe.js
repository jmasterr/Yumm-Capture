import API_URL from "../../../constants/API_URL.js";
import CustomRecipesEndpoints from "./CustomRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const updateCustomRecipe = async (recipe) => {
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
    calories: recipe.calories.toString(),
  };

  return await axios.put(
    `${API_URL}${CustomRecipesEndpoints.UPDATE_CUSTOM_RECIPES}${recipe._id}`,
    data,
    config
  );
};

export default updateCustomRecipe;
