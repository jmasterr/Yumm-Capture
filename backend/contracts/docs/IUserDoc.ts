import { Document } from "mongoose";
import IUser from "../IUser";

interface IUserDoc extends Document, IUser {}

export default IUserDoc;
