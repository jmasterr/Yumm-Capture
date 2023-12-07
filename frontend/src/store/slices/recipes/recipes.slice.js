import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  isGettingRecipes: false,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = [...action.payload.recipes];
    },
    removeRecipes: () => {
      return {
        ...initialState,
      };
    },
    setIsGettingRecipes: (state) => {
      state.isGettingRecipes = true;
    },
    setIsNotGettingRecipes: (state) => {
      state.isGettingRecipes = false;
    },
  },
});

export const {
  setRecipes,
  removeRecipes,
  setIsGettingRecipes,
  setIsNotGettingRecipes,
} = recipesSlice.actions;

export default recipesSlice.reducer;
