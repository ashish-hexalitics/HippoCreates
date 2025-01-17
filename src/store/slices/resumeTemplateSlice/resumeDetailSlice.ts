import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Element } from "../../../dto/element.dto";
interface IState {
  elements: Element[];
  configration: {
    zoomLevel: number;
    isPortrait: boolean;
    globalColorStyle: string;
    templateColorSwitch?: string | "previous" | "global";
  };
  newElement: Element;
  selectedElement: any;
  selectedElementId: number | null;
}

const initialState: IState = {
  elements: [],
  configration: {
    zoomLevel: 1,
    isPortrait: true,
    globalColorStyle: "",
    templateColorSwitch: "previous",
  },
  newElement: {
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
  },
  selectedElementId: null,
  selectedElement: null,
};

export const resumeTemplateSlice = createSlice({
  name: "TEMPLATE_ACTIONS",
  initialState,
  reducers: {
    updateSelectedElementId: (state: IState, action: PayloadAction<any>) => {
      const filterSelectedElement = state.elements.filter(
        (el: Element) => el.id === action.payload
      );
      return {
        ...state,
        selectedElementId: action.payload,
        selectedElement: filterSelectedElement.length
          ? filterSelectedElement[0]
          : null,
      };
    },
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
    updateGlobalColorStyle: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        configration: {
          ...state.configration,
          globalColorStyle: action.payload,
        },
      };
    },
    updateTemplateColorSwitch: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        configration: {
          ...state.configration,
          templateColorSwitch: action.payload,
        },
      };
    },
    updateConfigration: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        configration: {
          ...state.configration,
          ...action.payload,
        },
      };
    },
    updateElmentLayer: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        elements: action.payload,
      };
    },
    updateElmentLayerById: (state: IState, action: PayloadAction<any>) => {
      const updatedStateElements = state.elements.map((el: any) =>
        el.id === action.payload.id ? { ...el, ...action.payload.data } : el
      );
      return {
        ...state,
        elements: updatedStateElements,
      };
    },
    updateAllElmentLayerExpactThisId: (
      state: IState,
      action: PayloadAction<any>
    ) => {
      const updatedStateElements = state.elements.map((el: any) =>
        el.id === action.payload.id
          ? { ...el }
          : { ...el, ...action.payload.data }
      );
      return {
        ...state,
        elements: updatedStateElements,
      };
    },
    addNewElementLayer: (state: IState, action: PayloadAction<any>) => {
      const { elem, content } = action.payload;
      const newElement = {
        id: Date.now(),
        x: 0,
        y: 0,
        content: content,
        color: "#000000",
        fontSize: 16,
        fontWeight: "normal",
        padding: 0,
        ...(content === "Section" && {
          width: "100%",
          height: 50,
        }),
        ...(content === "Text" && { width: 100, height: 50 }),
        ...(content === "circle" && { width: 100, height: 100 }),
        ...(content === "rectangle" && { width: 200, height: 100 }),
        ...(content === "line" && { width: 200, height: 100 }),
        ...elem,
      };
      return {
        ...state,
        elements: [...state.elements, newElement],
        selectedElementId: newElement.id,
        selectedElement: newElement,
      };
    },
    fillDataTOInElmentLayer: (state: IState, action: PayloadAction<any>) => {
      const layer = action.payload.layer;
      const userResume = action.payload.userResume;
      const userJson = { ...userResume.data.user, ...userResume.data.userInfo };
      const getNestedProperty = (obj: any, path: string) => {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
      };
      const modifiedTemplateData = layer.map((layer: Element) => {
        return {
          ...layer,
          value: layer?.name ? userJson[layer?.name] : userJson.value,
          data: layer.key ? getNestedProperty(userResume, layer.key) : null,
        };
      });
      return {
        ...state,
        elements: modifiedTemplateData,
      };
    },
  },
});

export const {
  updateSelectedElementId,
  zoomInAndOut,
  updateIsPortraitValue,
  updateGlobalColorStyle,
  updateTemplateColorSwitch,
  updateConfigration,
  updateElmentLayer,
  updateElmentLayerById,
  updateAllElmentLayerExpactThisId,
  addNewElementLayer,
  fillDataTOInElmentLayer,
} = resumeTemplateSlice.actions;

export default resumeTemplateSlice.reducer;
