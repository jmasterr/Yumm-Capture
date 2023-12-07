import { all, takeEvery } from "redux-saga/effects";
import SavedRecipesActionTypes from "../../actions/saved-recipes/savedRecipes.action-types";

import getSavedRecipes from "./workers/getSavedRecipes";
import createSavedRecipe from "./workers/createSavedRecipe";

function* savedRecipesWatcher() {
  yield all([
    takeEvery(SavedRecipesActionTypes.GET_SAVED_RECIPES, getSavedRecipes),
    takeEvery(SavedRecipesActionTypes.CREATE_SAVED_RECIPE, createSavedRecipe),
  ]);
}

export default savedRecipesWatcher;
