import API_URL from "../../../constants/API_URL.js";
import CustomRecipesEndpoints from "./CustomRecipesEndpoints.js";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../constants/LOCAL_STORAGE_KEYS.js";

const getCustomRecipes = async (userId) => {
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
    `${API_URL}${CustomRecipesEndpoints.GET_CUSTOM_RECIPES}${userId}`,
    config
  );
};

export default getCustomRecipes;
