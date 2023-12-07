import { Document } from "mongoose";
import IRefreshToken from "../IRefreshToken";

interface IRefreshTokenDoc extends Document, IRefreshToken {}

export default IRefreshTokenDoc;
