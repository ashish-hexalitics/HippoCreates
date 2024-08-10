import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

interface IState {
  users: string[];
  user: {};
  template: {};
  templates: { document: string; _id: string; userId: string }[];
}

const initialState: IState = {
  users: [],
  user: {},
  template: {},
  templates: [],
};

export const createUserSlice = createSlice({
  name: "USER_ACTIONS",
  initialState,
  reducers: {
    getUsers: (state: IState) => {
      return state;
    },
    setLoggedInUser: (state: IState, action: PayloadAction<any>) => {
      state.user = action.payload;
      return state;
    },
    removeUser: (state: IState) => {
      state.users.pop();
      return state;
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
  },
});

export const {
  getUsers,
  setLoggedInUser,
  removeUser,
  updateUser,
  getTemplates,
  createTemplatesSlice,
} = createUserSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.users;

export default createUserSlice.reducer;
