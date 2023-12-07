import API_URL from "../../../constants/API_URL.js";
import CustomRecipesEndpoints from "./CustomRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const deleteCustomRecipe = async (recipeId) => {
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

  return await axios.delete(
    `${API_URL}${CustomRecipesEndpoints.DELETE_CUSTOM_RECIPE}${recipeId}`,
    config
  );
};

export default deleteCustomRecipe;
