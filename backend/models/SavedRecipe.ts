import { Schema, model } from "mongoose";
import models from "../constants/models";
import ISavedRecipe from "../contracts/ISavedRecipe";
import savedRecipeValidations from "../validations/savedRecipeValidations";
import joiObjOptions from "../constants/joiObjOptions";
import Joi from "joi";
import validateObjectID from "../helpers/validateObjectID";

// Defines the MongoDB Schema for the saved recipe collection
const savedRecipeSchema = new Schema<ISavedRecipe>({
  title: { type: String, required: true },
  directions: { type: String, required: true },
  calories: { type: Number, required: true },
  photoUrl: { type: String, required: true },
  apiId: { type: Number, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: models.user,
    required: true,
  },
});

const SavedRecipe = model<ISavedRecipe>(models.savedRecipe, savedRecipeSchema);

export const savedRecipeValidator = (savedRecipe: ISavedRecipe) => {
  const schema = Joi.object({
    title: Joi.string()
      .min(1)
      .required()
      .messages(savedRecipeValidations.title),
    directions: Joi.string()
      .min(1)
      .required()
      .messages(savedRecipeValidations.directions),
    photoUrl: Joi.string()
      .min(1)
      .required()
      .messages(savedRecipeValidations.photoUrl),
    calories: Joi.string().required().messages(savedRecipeValidations.calories),
    apiId: Joi.string().required().messages(savedRecipeValidations.apiId),
    user: Joi.custom((value, helper) =>
      validateObjectID(value, helper)
    ).messages(savedRecipeValidations.user),
  }).options({ abortEarly: false });

  return schema.validate(savedRecipe, joiObjOptions);
};

export default SavedRecipe;
