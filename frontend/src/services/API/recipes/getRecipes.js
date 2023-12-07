import axios from "axios";

const getRecipes = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    timeout: 30000,
    timeoutErrorMessage: "An error occurred. Please try again later.",
  };

  return await axios.get(`https://api.sampleapis.com/recipes/recipes`, config);
};

export default getRecipes;
