import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedRecipes: [],
  isGettingSavedRecipes: false,
  isCreatingSavedRecipes: false,
};

const savedRecipesSlice = createSlice({
  name: "savedRecipes",
  initialState: initialState,
  reducers: {
    setSavedRecipes: (state, action) => {
      state.savedRecipes = [...action.payload.savedRecipes];
    },
    removeSavedRecipes: () => {
      return {
        ...initialState,
      };
    },
    addSavedRecipe: (state, action) => {
      state.savedRecipes = [...state.savedRecipes, action.payload.savedRecipe];
    },
    setIsGettingSavedRecipes: (state) => {
      state.isGettingSavedRecipes = true;
    },
    setIsNotGettingSavedRecipes: (state) => {
      state.isGettingSavedRecipes = false;
    },
    setIsCreatingSavedRecipes: (state) => {
      state.isCreatingSavedRecipes = true;
    },
    setIsNotCreatingSavedRecipes: (state) => {
      state.isCreatingSavedRecipes = false;
    },
  },
});

export const {
  setSavedRecipes,
  removeSavedRecipes,
  addSavedRecipe,
  setIsGettingSavedRecipes,
  setIsNotGettingSavedRecipes,
  setIsCreatingSavedRecipes,
  setIsNotCreatingSavedRecipes,
} = savedRecipesSlice.actions;

export default savedRecipesSlice.reducer;
