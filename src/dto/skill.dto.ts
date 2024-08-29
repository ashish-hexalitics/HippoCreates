export interface ISkill {
  name?: string;
  status?: string;
  _id?: string;
}

export interface IUserSkill {
  userId?: string;
  proficiencyLevel?: string;
  skillId?: string | ISkill;
}