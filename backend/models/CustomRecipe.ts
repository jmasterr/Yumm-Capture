import { Schema, model } from "mongoose";
import models from "../constants/models";
import ICustomRecipe from "../contracts/ICustomRecipe";
import validateObjectId from "../helpers/validateObjectID";
import Joi from "joi";
import joiObjOptions from "../constants/joiObjOptions";
import customRecipeValidations from "../validations/customRecipeValidations";

// Defines the MongoDB Schema for the custom recipe collection
const customRecipeSchema = new Schema<ICustomRecipe>({
  title: { type: String, required: true },
  directions: { type: String, required: true },
  calories: { type: Number, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: models.user,
    required: true,
  },
});

const CustomRecipe = model<ICustomRecipe>(
  models.customRecipe,
  customRecipeSchema
);

export const customRecipeValidator = (customRecipe: ICustomRecipe) => {
  const schema = Joi.object({
    title: Joi.string()
      .min(1)
      .required()
      .messages(customRecipeValidations.title),
    directions: Joi.string()
      .min(1)
      .required()
      .messages(customRecipeValidations.directions),
    calories: Joi.string()
      .required()
      .messages(customRecipeValidations.calories),
    user: Joi.custom((value, helper) =>
      validateObjectId(value, helper)
    ).messages(customRecipeValidations.user),
  }).options({ abortEarly: false });

  return schema.validate(customRecipe, joiObjOptions);
};

export default CustomRecipe;
