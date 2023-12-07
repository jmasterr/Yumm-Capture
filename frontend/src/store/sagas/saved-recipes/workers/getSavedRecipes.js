import { call, put } from "redux-saga/effects";
import {
  setSavedRecipes,
  setIsGettingSavedRecipes,
  setIsNotGettingSavedRecipes,
} from "../../../slices/saved-recipes/savedRecipes.slice.js";
import getSavedRecipesAPI from "../../../../services/API/saved-recipes/getSavedRecipes.js";

function* getSavedRecipes({ userId }) {
  try {
    yield put(setIsGettingSavedRecipes());

    const getRecipesRes = yield call(getSavedRecipesAPI, userId);

    const getRecipesData = getRecipesRes.data;

    yield put(setSavedRecipes({ savedRecipes: getRecipesData.data }));

    yield put(setIsNotGettingSavedRecipes());
  } catch (error) {
    yield put(setIsNotGettingSavedRecipes());
  }
}

export default getSavedRecipes;
