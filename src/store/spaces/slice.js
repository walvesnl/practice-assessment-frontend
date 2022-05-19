import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
  detail_space: null,
};

const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      // console.log the action to see what data is coming from the thunk
      console.log("spacesFetched action", action);
      state.spaces = action.payload;
      state.loading = false;
    },
    oneSpaceFetched: (state, action) => {
      console.log("one space fetched", action);
      state.detail_space = action.payload;
      state.loading = false;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, spacesFetched, oneSpaceFetched } =
  spacesSlice.actions;

export default spacesSlice.reducer;
