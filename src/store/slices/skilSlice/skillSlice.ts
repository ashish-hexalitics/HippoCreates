import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISkill } from "../../../dto/skill.dto";
interface IState {
  skills?: ISkill[];
}

const initialState: IState = {
  skills: [],
};

export const createSkillsSlice = createSlice({
  name: "SKILL_ACTIONS",
  initialState,
  reducers: {
    getSkills: (state: IState, action: PayloadAction<any>) => {
      state.skills = action.payload;
      return state;
    },
  },
});

export const { getSkills } = createSkillsSlice.actions;

export default createSkillsSlice.reducer;
