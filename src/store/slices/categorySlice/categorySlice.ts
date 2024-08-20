import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICreateCategory {
  name: string;
  _id?: string;
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
    updateCategory: (state: IState, action: PayloadAction<any>) => {
      const index = state.categories.findIndex(
        (cat) => cat._id === action.payload._id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
      return state;
    },
    cloneCategory: (state: IState, action: PayloadAction<any>) => {
      state.categories.push(action.payload);
      return state;
    },
    deleteCategory: (state: IState, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (cat) => cat._id !== action.payload
      );
      return state;
    },
  },
});

export const {
  getCategories,
  addCategory,
  updateCategory,
  cloneCategory,
  deleteCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
