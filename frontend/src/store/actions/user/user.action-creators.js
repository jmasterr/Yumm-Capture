import UserActionTypes from "./user.action-types";

export const userLogin = (username, password, navigate) => {
  return {
    type: UserActionTypes.USER_LOGIN,
    username,
    password,
    navigate,
  };
};

export const userSetAuthenticated = () => {
  return {
    type: UserActionTypes.SET_USER_AUTHENTICATED,
  };
};

export const userLogout = (navigate) => {
  return {
    type: UserActionTypes.USER_LOGOUT,
    navigate,
  };
};

export const removeUser = () => {
  return {
    type: UserActionTypes.REMOVE_USER,
  };
};
