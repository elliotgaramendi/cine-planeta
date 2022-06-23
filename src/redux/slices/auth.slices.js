import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/authFirebase";

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
    }
  }
});

const {
  fetchAuthRegisterError,
  fetchAuthRegisterRequest,
  fetchAuthRegisterSuccess,
  fetchAuthLoginError,
  fetchAuthLoginRequest,
  fetchAuthLoginSuccess
} = authSlices.actions;

export const fetchAuthRegister = (user) => {
  return (async (dispatch) => {
    dispatch(fetchAuthRegisterRequest(true));
    try {
      const { email, password } = user;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(fetchAuthRegisterSuccess(userCredential.user.reloadUserInfo));
    } catch (error) {
      dispatch(fetchAuthRegisterError(error));
    }
  });
};

export const fetchAuthLogin = (user) => {
  return (async (dispatch) => {
    dispatch(fetchAuthLoginRequest(true));
    try {
      const { email, password } = user;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(fetchAuthLoginSuccess(userCredential.user.reloadUserInfo));
    } catch (error) {
      dispatch(fetchAuthLoginError(error));
    }
  });
};

export default authSlices.reducer;