import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

interface IState {
  users: string[];
}

const initialState: IState = {
  users: ["user1", "user2"],
};

export const createUserSlice = createSlice({
  name: "USER_ACTIONS",
  initialState,
  reducers: {
    getUsers: (state: IState) => {
      return state;
    },
    addUsers: (state: IState) => {
      state.users.push("new user");
      return state;
    },
    removeUser: (state: IState) => {
      state.users.pop();
      return state;
    },
    updateUser: (state: IState, action: PayloadAction<any>) => {
      return (state.users[action.payload.index] = action.payload.user);
    },
  },
});

export const { getUsers, addUsers, removeUser, updateUser } =
  createUserSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.users;

export default createUserSlice.reducer;
