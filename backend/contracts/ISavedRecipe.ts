import { Types } from "mongoose";

interface ISavedRecipe {
  user: Types.ObjectId;
  apiId: number;
  title: string;
  calories: number;
  directions: string;
  photoUrl: string;
}

export default ISavedRecipe;
