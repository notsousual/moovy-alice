import { configureStore } from "@reduxjs/toolkit";
import ratedReducer from "../features/RatedSlice";

export const store = configureStore({
  reducer: {
    rated: ratedReducer,
  },
});
