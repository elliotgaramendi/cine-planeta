import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

const initialState = {
  loading: false,
  error: {},
  premieres: []
};

const cinemasSlices = createSlice({
  name: 'cinemas',
  initialState,
  reducers: {
    fetchReadPremieresRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchReadPremieresSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        premieres: action.payload
      };
    },
    fetchReadPremieresError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        premieres: []
      };
    }
  }
});

const {
  fetchReadPremieresError,
  fetchReadPremieresRequest,
  fetchReadPremieresSuccess
} = cinemasSlices.actions;

export const fetchReadPremieres = () => {
  return (async (dispatch) => {
    dispatch(fetchReadPremieresRequest(true));
    try {
      const options = {
        method: 'GET',
        url: '/discover/movie',
      };
      const { data } = await axiosInstance(options);
      // dispatch(fetchReadPremieresSuccess(data.premieres));
      const premieres = data.results.splice(0, 6);
      dispatch(fetchReadPremieresSuccess(premieres));
    } catch (error) {
      dispatch(fetchReadPremieresError(error));
    }
  });
};

export default cinemasSlices.reducer;