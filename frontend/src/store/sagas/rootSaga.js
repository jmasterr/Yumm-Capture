import { all } from "redux-saga/effects";
import userWatcher from "./user/user.watcher";
import recipesWatcher from "./recipes/recipes.watcher";
import savedRecipesWatcher from "./saved-recipes/savedRecipes.watcher";
import customRecipesWatcher from "./custom-recipes/customRecipes.watcher";

function* rootSaga() {
  yield all([
    userWatcher(),
    recipesWatcher(),
    savedRecipesWatcher(),
    customRecipesWatcher(),
  ]);
}

export default rootSaga;
