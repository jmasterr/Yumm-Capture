import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import authSlice from "./slices/auth/auth.slice";
import userSlice from "./slices/user/user.slice";
import recipesSlice from "./slices/recipes/recipes.slice";
import savedRecipesSlice from "./slices/saved-recipes/savedRecipes.slice";
import customRecipesSlice from "./slices/custom-recipes/customRecipes.slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    recipes: recipesSlice,
    savedRecipes: savedRecipesSlice,
    customRecipes: customRecipesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
  devTools: import.meta.env.MODE === "development" ? true : false,
});

sagaMiddleware.run(rootSaga);

export default store;
