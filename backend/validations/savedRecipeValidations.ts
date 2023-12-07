const memberValidations = {
  title: {
    "string.base": "Title must be a string",
    "string.empty": "Title cannot be empty",
    "any.required": "Title is required",
    "string.min": "Title should at least be 1 characters long",
  },
  directions: {
    "string.base": "Directions must be a string",
    "string.empty": "Directions cannot be empty",
    "any.required": "Directions is required",
    "string.min": "Directions should at least be 1 characters long",
  },
  photoUrl: {
    "string.base": "Photo URL must be a string",
    "string.empty": "Photo URL cannot be empty",
    "any.required": "Photo URL is required",
    "string.min": "Photo URL should at least be 1 characters long",
  },
  calories: {
    "number.base": "Calories must be a number",
    "any.required": "Calories is required",
  },
  apiId: {
    "number.base": "apiId must be a number",
    "any.required": "apiId is required",
  },
  user: {
    "any.required": "Member is required",
  },
};

export default memberValidations;
