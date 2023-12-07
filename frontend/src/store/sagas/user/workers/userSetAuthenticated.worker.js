import { put } from "redux-saga/effects";
import { setUser } from "../../../slices/user/user.slice.js";
import {
  setIsLoggingIn,
  setIsNotLoggingIn,
  setIsAuthenticated,
  setIsNotAuthenticated,
  setHasCheckedAuth,
  setHasNotCheckedAuth,
} from "../../../slices/auth/auth.slice.js";
import { USER } from "../../../../constants/LOCAL_STORAGE_KEYS.js";

function* userSetAuthenticated() {
  try {
    yield put(setHasNotCheckedAuth());

    yield put(setIsLoggingIn());

    yield put(setIsNotAuthenticated());

    const retrievedUser = localStorage.getItem(USER);

    const user = JSON.parse(retrievedUser);

    yield put(setUser({ user: user }));

    yield put(setIsAuthenticated());

    yield put(setHasCheckedAuth());

    yield put(setIsNotLoggingIn());
  } catch (error) {
    yield put(setIsNotAuthenticated());

    yield put(setHasCheckedAuth());

    yield put(setIsNotLoggingIn());

    if (error.response?.status === 401) {
      console.log("Incorrect username or password");
    }
  }
}

export default userSetAuthenticated;
