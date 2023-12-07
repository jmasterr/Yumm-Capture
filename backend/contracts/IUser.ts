import { Types } from "mongoose";

interface IUser {
  username: string;
  password: string;
  savedRecipes: Types.ObjectId[];
  customRecipes: Types.ObjectId[];
  refreshTokens: Types.ObjectId[];
}

export default IUser;
