import { Types } from "mongoose";

interface IRefreshToken {
  token: string;
  user: Types.ObjectId;
  expiryDate: Date;
}

export default IRefreshToken;
