import API_URL from "../../../constants/API_URL.js";
import SavedRecipesEndpoints from "./SavedRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const getSavedRecipes = async (userId) => {
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

  return await axios.get(
    `${API_URL}${SavedRecipesEndpoints.GET_SAVED_RECIPES}${userId}`,
    config
  );
};

export default getSavedRecipes;
