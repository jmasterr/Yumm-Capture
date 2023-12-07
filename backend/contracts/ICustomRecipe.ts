import { Types } from "mongoose";

interface ICustomRecipe {
  user: Types.ObjectId;
  title: string;
  calories: number;
  directions: string;
}

export default ICustomRecipe;
