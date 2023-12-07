import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customRecipes: [],
  isGettingCustomRecipes: false,
  isGettingCustomRecipe: false,
  isCreatingCustomRecipe: false,
  isUpdatingCustomRecipe: false,
  isDeletingCustomRecipe: false,
};

const customRecipesSlice = createSlice({
  name: "customRecipes",
  initialState: initialState,
  reducers: {
    setCustomRecipes: (state, action) => {
      state.customRecipes = [...action.payload.customRecipes];
    },
    removeCustomRecipes: () => {
      return {
        ...initialState,
      };
    },
    addCustomRecipe: (state, action) => {
      state.customRecipes = [
        ...state.customRecipes,
        action.payload.customRecipe,
      ];
    },
    removeCustomRecipe: (state, action) => {
      state.customRecipes = state.customRecipes.filter(
        (customRecipe) => customRecipe._id !== action.payload.recipeId
      );
    },
    replaceCustomRecipe: (state, action) => {
      const newCustomRecipes = state.customRecipes.filter(
        (customRecipe) => customRecipe._id !== action.payload.recipe._id
      );
      state.customRecipes = [...newCustomRecipes, action.payload.recipe];
    },
    setIsGettingCustomRecipes: (state) => {
      state.isGettingCustomRecipes = true;
    },
    setIsNotGettingCustomRecipes: (state) => {
      state.isGettingCustomRecipes = false;
    },
    setIsGettingCustomRecipe: (state) => {
      state.isGettingCustomRecipe = true;
    },
    setIsNotGettingCustomRecipe: (state) => {
      state.isGettingCustomRecipe = false;
    },
    setIsCreatingCustomRecipe: (state) => {
      state.isCreatingCustomRecipe = true;
    },
    setIsNotCreatingCustomRecipe: (state) => {
      state.isCreatingCustomRecipe = false;
    },
    setIsUpdatingCustomRecipe: (state) => {
      state.isUpdatingCustomRecipe = true;
    },
    setIsNotUpdatingCustomRecipe: (state) => {
      state.isUpdatingCustomRecipe = false;
    },
    setIsDeletingCustomRecipe: (state) => {
      state.isDeletingCustomRecipe = true;
    },
    setIsNotDeletingCustomRecipe: (state) => {
      state.isDeletingCustomRecipe = false;
    },
  },
});

export const {
  setCustomRecipes,
  removeCustomRecipes,
  addCustomRecipe,
  removeCustomRecipe,
  replaceCustomRecipe,
  setIsGettingCustomRecipes,
  setIsNotGettingCustomRecipes,
  setIsCreatingCustomRecipe,
  setIsNotCreatingCustomRecipe,
  setIsUpdatingCustomRecipe,
  setIsNotUpdatingCustomRecipe,
  setIsDeletingCustomRecipe,
  setIsNotDeletingCustomRecipe,
  setIsGettingCustomRecipe,
  setIsNotGettingCustomRecipe,
} = customRecipesSlice.actions;

export default customRecipesSlice.reducer;
