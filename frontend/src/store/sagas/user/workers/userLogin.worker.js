import { call, put } from "redux-saga/effects";
import { setUser } from "../../../slices/user/user.slice.js";
import {
  setIsLoggingIn,
  setIsNotLoggingIn,
  setIsAuthenticated,
  setIsNotAuthenticated,
  setHasCheckedAuth,
  setHasNotCheckedAuth,
} from "../../../slices/auth/auth.slice.js";
import login from "../../../../services/API/user/login.js";
import {
  ACCESS_TOKEN,
  USER,
} from "../../../../constants/LOCAL_STORAGE_KEYS.js";

function* userLogin({ username, password, navigate }) {
  try {
    yield put(setHasNotCheckedAuth());

    yield put(setIsLoggingIn());

    yield put(setIsNotAuthenticated());

    const loginRes = yield call(login, username, password);

    const loginData = loginRes.data;

    console.log(loginData);

    localStorage.setItem(ACCESS_TOKEN, loginData.accessToken);
    localStorage.setItem(USER, JSON.stringify(loginData.user));

    yield put(setUser({ user: loginData.user }));

    yield put(setIsAuthenticated());

    yield put(setHasCheckedAuth());

    yield put(setIsNotLoggingIn());

    navigate("/recipes");
  } catch (error) {
    console.log(error);
    yield put(setIsNotAuthenticated());

    yield put(setHasCheckedAuth());

    yield put(setIsNotLoggingIn());

    if (error.response?.status === 401) {
      console.log("Incorrect username or password");
    }
  }
}

export default userLogin;
