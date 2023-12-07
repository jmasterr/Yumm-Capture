import { call, put } from "redux-saga/effects";
import {
  setIsGettingRecipes,
  setIsNotGettingRecipes,
  setRecipes,
} from "../../../slices/recipes/recipes.slice.js";
import getRecipesAPI from "../../../../services/API/recipes/getRecipes.js";

function* getRecipes() {
  try {
    yield put(setIsGettingRecipes());

    const getRecipesRes = yield call(getRecipesAPI);

    const getRecipesData = getRecipesRes.data;

    yield put(setRecipes({ recipes: getRecipesData.slice(0, 20) }));

    yield put(setIsNotGettingRecipes());
  } catch (error) {
    yield put(setIsNotGettingRecipes());
  }
}

export default getRecipes;
