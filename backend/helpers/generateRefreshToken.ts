import IUserDoc from "../contracts/docs/IUserDoc";
import authConfig from "../constants/authConfig";
import { v4 as uuidv4 } from "uuid";
import RefreshToken from "../models/RefreshToken";

const generateRefreshToken = async (user: IUserDoc) => {
  let expiredAt = new Date(); // creates a new instance of the current date

  expiredAt.setSeconds(
    expiredAt.getSeconds() + authConfig.jwtRefreshExpiration
  ); // sets new expiry time from the current date plus the refresh token expiration time

  let token = uuidv4(); // generate a new token

  let refreshTokenObj = new RefreshToken({
    token: token,
    user: user._id,
    expiryDate: expiredAt.getTime(),
  }); // creates a new refresh token instance

  let refreshToken = await refreshTokenObj.save(); // saves the refresh token instance to the db

  return refreshToken;
};

export default generateRefreshToken;
