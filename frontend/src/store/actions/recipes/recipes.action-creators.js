import RecipesActionTypes from "./recipes.action-types";

export const getRecipes = () => {
  return {
    type: RecipesActionTypes.GET_RECIPES,
  };
};

export default getRecipes;
