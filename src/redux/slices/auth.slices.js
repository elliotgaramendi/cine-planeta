import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: {},
  user: {}
};

const cinemasSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default cinemasSlices.reducer;