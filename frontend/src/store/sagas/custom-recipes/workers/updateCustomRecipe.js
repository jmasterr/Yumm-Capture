import { call, put } from "redux-saga/effects";
import {
  setIsNotUpdatingCustomRecipe,
  setIsUpdatingCustomRecipe,
} from "../../../slices/custom-recipes/customRecipes.slice.js";
import updateCustomRecipeAPI from "../../../../services/API/custom-recipes/updateCustomRecipe.js";

function* updateCustomRecipe({ recipe, navigate }) {
  try {
    yield put(setIsUpdatingCustomRecipe());

    yield call(updateCustomRecipeAPI, recipe);

    yield put(setIsNotUpdatingCustomRecipe());

    navigate("/custom-recipes");
  } catch (error) {
    yield put(setIsNotUpdatingCustomRecipe());
  }
}

export default updateCustomRecipe;
