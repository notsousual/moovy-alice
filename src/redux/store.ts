import { configureStore } from "@reduxjs/toolkit";
import ratedReducer from "./RatedSlice";

export const store = configureStore({
  reducer: {
    rated: ratedReducer,
  },
});
