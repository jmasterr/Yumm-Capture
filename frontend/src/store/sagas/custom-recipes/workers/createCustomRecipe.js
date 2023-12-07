import { call, put } from "redux-saga/effects";
import {
  addCustomRecipe,
  setIsCreatingCustomRecipe,
  setIsNotCreatingCustomRecipe,
} from "../../../slices/custom-recipes/customRecipes.slice.js";
import createCustomRecipeAPI from "../../../../services/API/custom-recipes/createCustomRecipe.js";

function* createCustomRecipe({ recipe, userId }) {
  try {
    yield put(setIsCreatingCustomRecipe());

    const createRecipeRes = yield call(createCustomRecipeAPI, recipe, userId);

    const createRecipeData = createRecipeRes.data;

    yield put(addCustomRecipe({ customRecipe: createRecipeData.data }));

    yield put(setIsNotCreatingCustomRecipe());
  } catch (error) {
    yield put(setIsNotCreatingCustomRecipe());
  }
}

export default createCustomRecipe;
