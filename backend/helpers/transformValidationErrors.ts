import Joi from "joi";

const transformValidationError = (errors: Joi.ValidationError | undefined) => {
  if (!errors) return [];

  const errorsArray = errors.details.map((error) => {
    let errorObj: { field: any; message: any } = { field: "", message: "" };
    errorObj.field = error.path[0];
    errorObj.message = error.message;
    return errorObj;
  });

  return errorsArray;
};

export default transformValidationError;
