import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import { setAuthToken } from "../utils";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const signin = createAsyncThunk("/user/signin", async (payload) => {
  try {
    const response = await axios.get("/signin", {
      params: { userId: payload.email, password: payload.password },
    });
    return response.data;
  }
  catch (e) {
    return e.response.data;
  }
});

const token = localStorage.token || null;

const initialState = {
  isAuthenticated: !!token,
  isLoading: false,
  user: {},
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, {payload}) => {
        if(payload.token){
          state.isLoading = false;
          axios.defaults.headers.common["Authorization"] = payload.token;
          localStorage.setItem("token", payload.token);
          state.user = payload.user;
        }
      })
      .addCase(signin.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload.error.message;
      })
  },
});

export const { actions, reducer } = authSlice;
