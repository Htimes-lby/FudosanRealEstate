import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import { setAuthToken } from "../utils";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const signin = createAsyncThunk("/user/signin", async (payload) => {
  try {
    const response = await axios.get("/signin", {
      params: { email: payload.email, password: payload.password },
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
    getToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    signOut: state => {
      localStorage.removeItem("token");
      setAuthToken(null);
      state.isAuthenticated = false;
      state.user = null;
    },
    resetError: (state) => {
      state.error = "";
    }
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
          localStorage.setItem("id", payload.user._id);
          state.user = payload.user;
          console.log(payload.user)
        }
      })
      .addCase(signin.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload.error.message;
      })
  },
});

export const { actions, reducer } = authSlice;
