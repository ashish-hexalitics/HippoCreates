import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICreateCategory {
  name: string;
}

interface IState {
  categories: ICreateCategory[];
  category: {};
}

const initialState: IState = {
  categories: [],
  category: {},
};

const categorySlice = createSlice({
  name: "CATEGORY",
  initialState,
  reducers: {
    getCategories: (state: IState, action: PayloadAction<any>) => {
      state.categories = action.payload;
      return state;
    },
    createCategory: (state: IState, action: PayloadAction<any>) => {
      state.category = action.payload;
      return state;
    },
  },
});

export const { getCategories, createCategory } = categorySlice.actions;

export default categorySlice.reducer;
