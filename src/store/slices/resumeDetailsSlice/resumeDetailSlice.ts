import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../../../dto/user.dto";
interface IState {
  user?: {};
  educations?: any[];
  employments?: any[];
  skills?: any[];
  userInfo?: IUserInfo;
  step?: {
    route: string;
    step: number;
    field: string;
    completed: boolean;
  }[];
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
  step: [
    {
      route: "build-resume/contact",
      step: 1,
      field: "userInfo",
      completed: false,
    },
    {
      route: "build-resume/experience",
      step: 2,
      field: "employments",
      completed: false,
    },
    {
      route: "build-resume/education",
      step: 3,
      field: "educations",
      completed: false,
    },
    {
      route: "build-resume/skills",
      step: 4,
      field: "skills",
      completed: false,
    },
    {
      route: "build-resume/additional-details",
      step: 5,
      field: "additionalDetails",
      completed: false,
    },
  ],
};

export const createResumeDetailsSlice = createSlice({
  name: "RESUME_ACTIONS",
  initialState,
  reducers: {
    getUserResumeData: (state: IState, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    updateUserResumeData: (state: IState | any, action: PayloadAction<any>) => {
      return {
        ...state,
        ...(action.payload.key
          ? { [action.payload.key]: action.payload }
          : action.payload),
      };
    },
  },
});

export const {
  getUserResumeData,
  updateUserResumeData,
} = createResumeDetailsSlice.actions;

export default createResumeDetailsSlice.reducer;
