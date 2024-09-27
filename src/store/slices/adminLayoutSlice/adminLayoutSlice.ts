import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";
interface IState {
  layout?: {
    showLeftSidebar: boolean;
    showTemplateRightSidebar: boolean;
    showHeader: boolean;
    showLoginButton: boolean;
  };
}

const initialState: IState = {
  layout: {
    showLeftSidebar: true,
    showTemplateRightSidebar: true,
    showHeader: true,
    showLoginButton: true,
  },
};

export const createAdminLayoutSlice = createSlice({
  name: "ADMIN_LAYOUT",
  initialState,
  reducers: {
    getLayout: (state: IState) => {
      return state;
    },
    updateLayout: (state: IState, action: PayloadAction<any>) => {
      state = { ...state, layout: { ...state.layout, ...action.payload } };
      return state;
    },
  },
});

export const { getLayout, updateLayout } = createAdminLayoutSlice.actions;

export const selectLayout = (state: RootState) => state.adminLayoutSlice.layout;

export default createAdminLayoutSlice.reducer;
