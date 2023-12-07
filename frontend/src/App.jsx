import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN, USER } from "./constants/LOCAL_STORAGE_KEYS.js";
import { userSetAuthenticated } from "./store/actions/user/user.action-creators.js";

const App = () => {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const user = localStorage.getItem(USER);

    if (accessToken && user) {
      dispatch(userSetAuthenticated());
    }
  }, [dispatch]);

  if (isLoggingIn) return null;

  return <RouterProvider router={router} />;
};

export default App;
