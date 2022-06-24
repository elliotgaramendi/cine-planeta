import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: {},
  user: {}
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchAuthRegisterRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchAuthRegisterSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        user: action.payload
      };
    },
    fetchAuthRegisterError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: {}
      };
    },
    fetchAuthLoginRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchAuthLoginSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        user: action.payload
      };
    },
    fetchAuthLoginError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: {}
      };
    },
    logOutAuth(state) {
      return {
        ...state,
        loading: false,
        error: {},
        user: {}
      };
    }
  }
});

export const {
  fetchAuthRegisterError,
  fetchAuthRegisterRequest,
  fetchAuthRegisterSuccess,
  fetchAuthLoginError,
  fetchAuthLoginRequest,
  fetchAuthLoginSuccess,
  logOutAuth
} = authSlices.actions;

export default authSlices.reducer;