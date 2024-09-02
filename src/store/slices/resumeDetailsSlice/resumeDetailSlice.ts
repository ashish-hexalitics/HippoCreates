import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../../../dto/user.dto";
interface IState {
  user?: {};
  educations?: any[];
  employments?: any[];
  skills?: any[];
  userInfo?: IUserInfo;
}

const initialState: IState = {
  user: {},
  educations: [],
  employments: [],
  skills: [],
  userInfo: {
    userId: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    address: "",
    phone: "",
    otherEmail: "",
    website: "",
    gender: "",
    description: "",
    title: "",
  },
};

export const createResumeDetailsSlice = createSlice({
  name: "RESUME_ACTIONS",
  initialState,
  reducers: {
    getUserResumeData: (state: IState, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
    updateUserResumeData: (state: IState | any, action: PayloadAction<any>) => {
      state[action.payload.key] = {
        ...state[action.payload.key],
        ...action.payload
      };
      return state;
    },
  },
});

export const { getUserResumeData, updateUserResumeData } =
  createResumeDetailsSlice.actions;

export default createResumeDetailsSlice.reducer;
