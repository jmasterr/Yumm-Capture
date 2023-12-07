import SavedRecipesActionTypes from "./savedRecipes.action-types";

export const getSavedRecipes = (userId) => {
  return {
    type: SavedRecipesActionTypes.GET_SAVED_RECIPES,
    userId: userId,
  };
};

export const createSavedRecipe = (recipe, userId) => {
  return {
    type: SavedRecipesActionTypes.CREATE_SAVED_RECIPE,
    recipe,
    userId,
  };
};
