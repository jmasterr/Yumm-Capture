import IRefreshTokenDoc from "../contracts/docs/IRefreshTokenDoc";

const refreshTokenIsExpired = (refreshToken: IRefreshTokenDoc): boolean => {
  // checks if the refresh token is expired. returns a boolean
  return refreshToken.expiryDate.getTime() < new Date().getTime();
};

export default refreshTokenIsExpired;
