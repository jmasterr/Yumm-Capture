import jsonwebtoken from "jsonwebtoken";
import { Types } from "mongoose";
import authConfig from "../constants/authConfig";

interface IUserDoc {
  _id: Types.ObjectId;
}

const generateAccessToken = (user: IUserDoc) => {
  const accessToken = jsonwebtoken.sign(
    { _id: user._id },
    authConfig.jwtSecret
  ); // this generates a new access token with the user ID and the user role

  return accessToken;
};

export default generateAccessToken;
