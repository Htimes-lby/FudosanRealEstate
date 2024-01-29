import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import { setAuthToken } from "../utils";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const signin = createAsyncThunk("/user/signin", async (payload) => {
  try {
    const response = await axios.get("/user", {
      params: { userId: payload.userId, password: payload.password },
    });
    return response.data;
  }
  catch (e) {
    return e.response.data;
  }
});

const token = localStorage.token || null;
const user = token ? jwtDecode(token) : null;

const initialState = {
  isAuthenticated: !!token,
  loading: false,
  user,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: state => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, { payload }) => {
      setAuthToken(payload);
      state.isAuthenticated = true;
      state.loading = false;
      state.user = jwtDecode(payload);
      state.error = null;
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    signUpStart: state => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: state => {
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    signOut: state => {
      localStorage.removeItem("token");
      setAuthToken(null);
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions, reducer } = authSlice;
