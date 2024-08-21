import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";
interface IState {
  users: string[];
  user: {};
  template: {};
  templates: { document: string; _id: string; userId: string }[];
  accessToken: null | string;
  userInfo?: {
    address: string;
    phone: string;
    website: string;
    gender: string;
    description: string;
    title: string;
  };
}

const initialState: IState = {
  users: [],
  user: {},
  template: {},
  templates: [],
  accessToken: null,
  userInfo: {
    address: "",
    phone: "",
    website: "",
    gender: "",
    description: "",
    title: "",
  },
};

export const createUserSlice = createSlice({
  name: "USER_ACTIONS",
  initialState,
  reducers: {
    getUsers: (state: IState, action: PayloadAction<any>) => {
      state.users = action.payload;
      return state;
    },
    setLoggedInUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
      return state;
    },
    getLoggedInUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
      return state;
    },
    getUserInfo: (state: IState, action: PayloadAction<any>) => {
      console.log(action);
      state.userInfo = { ...state.userInfo, ...action.payload };
      return state;
    },
    logout: (state) => {
      state.user = {};
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    },
    updateUser: (state: IState, action: PayloadAction<any>) => {
      return (state.users[action.payload.index] = action.payload.user);
    },
    getTemplates: (state: IState, action: PayloadAction<any>) => {
      state.templates = action.payload;
      return state;
    },
    createTemplatesSlice: (state: IState, action: PayloadAction<any>) => {
      state.template = action.payload;
      return state;
    },
    getTemplate: (state: IState, action: PayloadAction<any>) => {
      state.template = action.payload;
      return state;
    },
  },
});

export const {
  getUsers,
  setLoggedInUser,
  getLoggedInUser,
  logout,
  updateUser,
  getTemplates,
  getTemplate,
  createTemplatesSlice,
  getUserInfo,
} = createUserSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.users;

export default createUserSlice.reducer;
