import CustomRecipesActionTypes from "./customRecipes.action-types.js";

export const getCustomRecipes = (userId) => {
  return {
    type: CustomRecipesActionTypes.GET_CUSTOM_RECIPES,
    userId,
  };
};

export const getCustomRecipe = (recipeId) => {
  return {
    type: CustomRecipesActionTypes.GET_CUSTOM_RECIPE,
    recipeId,
  };
};

export const createCustomRecipe = (recipe, userId) => {
  return {
    type: CustomRecipesActionTypes.CREATE_CUSTOM_RECIPES,
    recipe,
    userId,
  };
};

export const updateCustomRecipe = (recipe, navigate) => {
  return {
    type: CustomRecipesActionTypes.UPDATE_CUSTOM_RECIPES,
    recipe,
    navigate,
  };
};

export const deleteCustomRecipe = (recipeId) => {
  return {
    type: CustomRecipesActionTypes.DELETE_CUSTOM_RECIPE,
    recipeId,
  };
};
