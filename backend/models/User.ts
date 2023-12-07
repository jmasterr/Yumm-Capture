import { Schema, model } from "mongoose";
import IUser from "../contracts/IUser";
import models from "../constants/models";
import bcrypt from "bcrypt";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import validateObjectID from "../helpers/validateObjectID";
import joiObjOptions from "../constants/joiObjOptions";
import passwordComplexityOptions from "../constants/passwordComplexityOptions";
import userValidations from "../validations/userValidations";

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 8, max: 1024 },
    refreshTokens: [
      {
        type: Schema.Types.ObjectId,
        ref: models.refreshToken,
        required: true,
      },
    ],
    savedRecipes: [
      {
        type: Schema.Types.ObjectId,
        ref: models.savedRecipe,
      },
    ],
    customRecipes: [
      {
        type: Schema.Types.ObjectId,
        ref: models.customRecipe,
      },
    ],
  },
  { timestamps: true }
);

// Middleware to hash the password in the user object
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const User = model<IUser>(models.user, userSchema);

export const userValidator = (user: IUser) => {
  const schema = Joi.object({
    username: Joi.string()
      .min(4)
      .max(50)
      .required()
      .messages(userValidations.username),
    password: passwordComplexity(passwordComplexityOptions).messages(
      userValidations.password
    ),
    refreshTokens: Joi.custom((value, helper) =>
      validateObjectID(value, helper)
    ).messages(userValidations.refreshTokens),
    customRecipes: Joi.custom((value, helper) =>
      validateObjectID(value, helper)
    ).messages(userValidations.customRecipes),
    savedRecipes: Joi.custom((value, helper) =>
      validateObjectID(value, helper)
    ).messages(userValidations.savedRecipes),
  }).options({ abortEarly: false });

  return schema.validate(user, joiObjOptions);
};

export default User;
