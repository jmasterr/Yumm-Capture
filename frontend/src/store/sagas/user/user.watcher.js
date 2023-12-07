import { all, takeEvery } from "redux-saga/effects";
import UserActionTypes from "../../actions/user/user.action-types";

import userLogin from "./workers/userLogin.worker";
import userSetAuthenticated from "./workers/userSetAuthenticated.worker";

function* userWatcher() {
  yield all([
    takeEvery(UserActionTypes.USER_LOGIN, userLogin),
    takeEvery(UserActionTypes.SET_USER_AUTHENTICATED, userSetAuthenticated),
  ]);
}

export default userWatcher;
