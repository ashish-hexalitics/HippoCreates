import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

interface IState {
  users: string[];
  user:{}
}

const initialState: IState = {
  users: ["user1", "user2"],
  user:{}
};

export const createUserSlice = createSlice({
  name: "USER_ACTIONS",
  initialState,
  reducers: {
    getUsers: (state: IState) => {
      return state;
    },
    setLoggedInUser: (state: IState, action: PayloadAction<any>) => {
      state.user =  action.payload
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

export const { getUsers, setLoggedInUser, removeUser, updateUser } =
  createUserSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.users;

export default createUserSlice.reducer;
