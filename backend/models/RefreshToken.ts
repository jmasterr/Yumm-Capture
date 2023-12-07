import { Schema, model } from "mongoose";
import models from "../constants/models";
import IRefreshToken from "../contracts/IRefreshToken";

// Defines the MongoDB Schema for the RefreshToken collection
const refreshTokenSchema = new Schema<IRefreshToken>({
  token: { type: String, unique: true, required: true },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: models.user,
  },
  expiryDate: { type: Date, required: true },
});

const RefreshToken = model<IRefreshToken>(
  models.refreshToken,
  refreshTokenSchema
);

export default RefreshToken;
