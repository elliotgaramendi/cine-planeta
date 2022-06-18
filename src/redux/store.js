import { configureStore } from "@reduxjs/toolkit";
import cinemasSlices from "./slices/cinemas.slices";

const store = configureStore({
  reducer: {
    cinemasStore: cinemasSlices
  }
});

export default store;