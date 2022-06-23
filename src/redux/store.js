import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/auth.slices";
import cinemasSlices from "./slices/cinemas.slices";

const store = configureStore({
  reducer: {
    cinemasStore: cinemasSlices,
    authStore: authSlices
  }
});

export default store;