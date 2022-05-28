import { createSlice } from '@reduxjs/toolkit';

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState: "",
  reducers: {
    setSearchTerm(state, action) {
      state = action.payload;
      return state;
    },
    clearSearchTerm(state) {
      state = "";
      return state;
    }
  }
});

export const selectSearchTerm = (state) => state.searchbar;
export const { setSearchTerm, clearSearchTerm } = searchbarSlice.actions;

export default searchbarSlice.reducer;
