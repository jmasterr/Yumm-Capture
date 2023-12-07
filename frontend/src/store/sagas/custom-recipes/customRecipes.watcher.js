import { all, takeEvery } from "redux-saga/effects";
import CustomRecipesActionTypes from "../../actions/custom-recipes/customRecipes.action-types.js";

import getCustomRecipes from "./workers/getCustomRecipes.js";
import createCustomRecipe from "./workers/createCustomRecipe.js";
import deleteCustomRecipe from "./workers/deleteCustomRecipe.js";
import updateCustomRecipe from "./workers/updateCustomRecipe.js";

function* customRecipesWatcher() {
  yield all([
    takeEvery(CustomRecipesActionTypes.GET_CUSTOM_RECIPES, getCustomRecipes),
    takeEvery(
      CustomRecipesActionTypes.CREATE_CUSTOM_RECIPES,
      createCustomRecipe
    ),
    takeEvery(
      CustomRecipesActionTypes.DELETE_CUSTOM_RECIPE,
      deleteCustomRecipe
    ),
    takeEvery(
      CustomRecipesActionTypes.UPDATE_CUSTOM_RECIPES,
      updateCustomRecipe
    ),
  ]);
}

export default customRecipesWatcher;
