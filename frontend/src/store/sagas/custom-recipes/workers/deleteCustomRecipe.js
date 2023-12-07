import { call, put } from "redux-saga/effects";
import {
  removeCustomRecipe,
  setIsDeletingCustomRecipe,
  setIsNotDeletingCustomRecipe,
} from "../../../slices/custom-recipes/customRecipes.slice.js";
import deleteCustomRecipeAPI from "../../../../services/API/custom-recipes/deleteCustomRecipe.js";

function* deleteCustomRecipe({ recipeId }) {
  try {
    yield put(setIsDeletingCustomRecipe());

    yield call(deleteCustomRecipeAPI, recipeId);

    yield put(removeCustomRecipe({ recipeId: recipeId }));

    yield put(setIsNotDeletingCustomRecipe());
  } catch (error) {
    yield put(setIsNotDeletingCustomRecipe());
  }
}

export default deleteCustomRecipe;
