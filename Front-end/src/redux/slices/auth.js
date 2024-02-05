import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../utils";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCookies } from "react-cookie";


export const signin = createAsyncThunk("/user/signin", async (props, { rejectWithValue }) => {
  // const [cookies, setCookie] = useCookies();
  try {
    const payload = props.signinObject;
    const setCookie = props.setCookie;
    const cookies = props.cookies;
    const response = await axios.get("/signin", {
      params: { email: payload.email, password: payload.password },
    });
    console.log(response.data)
    setCookie('user', response.data.user);
    setCookie('token', response.data.token);
    //console.log('----------------------cookie', cookies.user)
    return response.data;
  }
  catch (error) {
    //console.log('---------------------', error);
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
          state.user = payload.user;
          state.error = null;
        }
      })
      .addCase(signin.rejected, (state, action) => {
        console.log(action.payload.message);
        state.isLoading = false;
        state.error = action.payload.message;
      })
  },
});

export const { actions, reducer } = authSlice;
