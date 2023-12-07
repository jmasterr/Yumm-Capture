import { call, put } from "redux-saga/effects";
import {
  setCustomRecipes,
  setIsGettingCustomRecipes,
  setIsNotGettingCustomRecipes,
} from "../../../slices/custom-recipes/customRecipes.slice.js";
import getCustomRecipesAPI from "../../../../services/API/custom-recipes/getCustomRecipes.js";

function* getCustomRecipes({ userId }) {
  try {
    yield put(setIsGettingCustomRecipes());

    const getRecipesRes = yield call(getCustomRecipesAPI, userId);

    const getRecipesData = getRecipesRes.data;

    yield put(setCustomRecipes({ customRecipes: getRecipesData.data }));

    yield put(setIsNotGettingCustomRecipes());
  } catch (error) {
    yield put(setIsNotGettingCustomRecipes());
  }
}

export default getCustomRecipes;
