import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../utils";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const signin = createAsyncThunk("/user/signin", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.get("/signin", {
      params: { email: payload.email, password: payload.password },
    });
    return response.data;

  }
  catch (error) {
    console.log('---------------------', error);
    if(error.response.status === 500) {
      return rejectWithValue({ message: error.response.data.message })
    }
    return rejectWithValue({message : 'error occured'});
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
          state.error = null;
        }
      })
      .addCase(signin.rejected, (state, action) => {
        console.log('+++++++++++++++++++++', action.payload.message);
        state.isLoading = false;
        state.error = action.payload.message;
      })
  },
});

export const { actions, reducer } = authSlice;
