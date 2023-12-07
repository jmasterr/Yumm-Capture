import { Types } from "mongoose";

const validateObjectID = (value: any, helper: any) => {
  const ObjectId = Types.ObjectId;
  if (Array.isArray(value)) {
    value.map((value, i) => {
      if (ObjectId.isValid(value[i])) {
        return true;
      } else {
        return helper.message("Must provide a valid ObjectId");
      }
    });
  } else {
    if (ObjectId.isValid(value)) {
      return true;
    } else {
      return helper.message("Must provide a valid ObjectId");
    }
  }
};

export default validateObjectID;
