import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cinemas: []
};

const cinemasSlices = createSlice({
  name: 'cinemas',
  initialState,
  reducers: {}
});

export default cinemasSlices.reducer;