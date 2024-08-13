import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICreateCategory {
  name: string;
}

interface IState {
  categories: ICreateCategory[];
  category: ICreateCategory | {};
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
    addCategory: (state: IState, action: PayloadAction<any>) => {
      state.categories.push(action.payload);
      state.category = action.payload;
      return state;
    },
  },
});

export const { getCategories, addCategory } = categorySlice.actions;

export default categorySlice.reducer;
