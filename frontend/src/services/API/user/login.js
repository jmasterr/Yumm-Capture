import API_URL from "../../../constants/API_URL";
import UserEndpoints from "./UserEndpoints";
import axios from "axios";

const login = async (username, password) => {
  const loginData = {
    username: username,
    password: password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    timeout: 30000,
    timeoutErrorMessage: "An error occurred. Please try again later.",
  };

  return await axios.post(
    `${API_URL}${UserEndpoints.LOGIN}`,
    loginData,
    config
  );
};

export default login;
