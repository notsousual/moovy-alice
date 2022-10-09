import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rated: [],
};

export const ratedSlice = createSlice({
  name: "rated",
  initialState,
  reducers: {
    addRated: (state: any, action) => {
      const copiedMovie = Object.assign({}, action.payload);
      let isNew = true;

      state.rated = state.rated.map((movie: any) => {
        if (movie.id === copiedMovie.id) {
          isNew = false;
          return copiedMovie;
        } else {
          return movie;
        }
      });

      if (isNew) state.rated.push(copiedMovie);
    },
  },
});

export const { addRated } = ratedSlice.actions;
export default ratedSlice.reducer;
