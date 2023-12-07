import { all, takeEvery } from "redux-saga/effects";
import RecipesActionTypes from "../../actions/recipes/recipes.action-types";

import getRecipes from "./workers/getRecipes.worker";

function* recipesWatcher() {
  yield all([takeEvery(RecipesActionTypes.GET_RECIPES, getRecipes)]);
}

export default recipesWatcher;
