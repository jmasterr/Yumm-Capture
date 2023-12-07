const userValidations = {
  username: {
    "string.base": "Username must be a string",
    "string.empty": "Username cannot be empty",
    "any.required": "Username is required",
    "string.min": "Username should at least be 4 characters long",
  },
  password: {
    "any.required": "Password is required",
  },
  refreshTokens: {
    "any.required": "Refresh token must be provided",
  },
  customRecipes: {
    "any.required": "Custom recipes must be provided",
  },
  savedRecipes: {
    "any.required": "Saved recipes must be provided",
  },
};

export default userValidations;
