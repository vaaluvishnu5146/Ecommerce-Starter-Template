import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    primaryColor: null,
    secondaryColor: null,
  },
  reducers: {
    // ACTION CREATOR
    updateTheme: (state, action) => {
      if (action.payload) {
        console.log(state, action);
      }
    },
  },
});

export const { updateTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
