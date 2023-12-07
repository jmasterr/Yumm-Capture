import { call, put } from "redux-saga/effects";
import {
  addSavedRecipe,
  setIsCreatingSavedRecipes,
  setIsNotCreatingSavedRecipes,
} from "../../../slices/saved-recipes/savedRecipes.slice.js";
import createSavedRecipeAPI from "../../../../services/API/saved-recipes/createSavedRecipe.js";

function* createSavedRecipe({ recipe, userId }) {
  try {
    yield put(setIsCreatingSavedRecipes());

    const createRecipeRes = yield call(createSavedRecipeAPI, recipe, userId);

    const createRecipeData = createRecipeRes.data;

    console.log(createRecipeData);

    yield put(addSavedRecipe({ savedRecipe: createRecipeData.data }));

    yield put(setIsNotCreatingSavedRecipes());
  } catch (error) {
    yield put(setIsNotCreatingSavedRecipes());
  }
}

export default createSavedRecipe;
