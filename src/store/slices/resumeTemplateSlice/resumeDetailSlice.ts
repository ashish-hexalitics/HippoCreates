import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Element } from "../../../dto/element.dto";
interface IState {
  configration: {
    zoomLevel: number;
    isPortrait: boolean;
  };
  newElement: Element;
}

const initialState: IState = {
  configration: {
    zoomLevel: 1,
    isPortrait: true,
  },
  newElement:{
    id: Date.now(),
      x: 0,
      y: 0,
      width: 100,
      height: 50,
      content: "",
      color: "#000000",
      fontSize: 16,
      fontWeight: "normal",
      padding: 0,
  }
};

export const resumeTemplateSlice = createSlice({
  name: "TEMPLATE_ACTIONS",
  initialState,
  reducers: {
    zoomInAndOut: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        configration: {
          ...state.configration,
          zoomLevel: action.payload,
        },
      };
    },
    updateIsPortraitValue: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        configration: {
          ...state.configration,
          isPortrait: action.payload,
        },
      };
    },
  },
});

export const { zoomInAndOut, updateIsPortraitValue } =
  resumeTemplateSlice.actions;

export default resumeTemplateSlice.reducer;