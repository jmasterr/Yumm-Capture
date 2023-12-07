import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  fullName: "",
  username: "",
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...action.payload.user,
      };
    },
    removeUser: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
