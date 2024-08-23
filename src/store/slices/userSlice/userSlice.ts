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
      state.templates = [...state.templates, action.payload];
      return state;
    },
    getTemplateSlice: (state: IState, action: PayloadAction<any>) => {
      state.template = action.payload;
      return state;
    },
    updateTemplateSlice: (state: IState, action: PayloadAction<any>) => {
      return (state.template = action.payload);
    },
    deleteTemplateSlice: (state: IState, action: PayloadAction<any>) => {
      state.templates = state.templates.filter(
        (template) => template._id !== action.payload
      );
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
  getTemplateSlice,
  createTemplatesSlice,
  getUserInfo,
  updateTemplateSlice,
  deleteTemplateSlice
} = createUserSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.users;

export default createUserSlice.reducer;


// [{
    //   id: 1724230975259,
    //   x: 20,
    //   y: 42,
    //   width: 155,
    //   height: 50,
    //   content: "Text",
    //   name: "name",
    //   value: "your Name",
    //   color: "#000000",
    //   fontSize: 12,
    //   fontWeight: "bold",
    //   padding: 0,
    // },
    // {
    //   id: 1724231098012,
    //   x: 19,
    //   y: 60,
    //   width: 162,
    //   height: 50,
    //   content: "Text",
    //   name: "email",
    //   value: "example@example.com",
    //   color: "#000000",
    //   fontSize: 16,
    //   fontWeight: "bold",
    //   padding: 0,
    // },
    // {
    //   id: 1724231166117,
    //   x: 19,
    //   y: 84,
    //   width: 118,
    //   height: 50,
    //   content: "Text",
    //   name: "phone",
    //   value: "333322221111",
    //   color: "#000000",
    //   fontSize: 16,
    //   fontWeight: "bold",
    //   padding: 0,
    // },
    // {
    //   id: 1724231284685,
    //   x: 18,
    //   y: 107,
    //   width: 100,
    //   height: 50,
    //   content: "Text",
    //   name: "Gender",
    //   value: "male",
    //   color: "#000000",
    //   fontSize: 16,
    //   fontWeight: "bold",
    //   padding: 0,
    // },
    // {
    //   id: 1724231360724,
    //   x: 19,
    //   y: 131,
    //   width: 100,
    //   height: 50,
    //   content: "Text",
    //   name: "Address",
    //   value: "xyx.",
    //   color: "#000000",
    //   fontSize: 16,
    //   fontWeight: "bold",
    //   padding: 0,
    // }]