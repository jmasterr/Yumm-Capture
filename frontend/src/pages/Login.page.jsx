import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/actions/user/user.action-creators";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/recipes");
    }
  }, [isAuthenticated, navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const onLoginClick = () => dispatch(userLogin(username, password, navigate));

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginForm}>
        <Text fontSize="4xl" align="center">
          Welcome Back
        </Text>
        <Text fontSize="xl" align="center">
          Please log in to continue
        </Text>
        <Stack marginTop={25} spacing={3}>
          <Input
            onChange={handleUsernameChange}
            value={username}
            variant="filled"
            placeholder="Username"
            size="md"
          />
          <Input
            onChange={handlePasswordChange}
            value={password}
            variant="filled"
            placeholder="Password"
            size="md"
            type="password"
          />
          <Button
            isLoading={isLoggingIn}
            onClick={onLoginClick}
            size="md"
            colorScheme="blue"
          >
            Log In
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    width: 400,
  },
};

export default LoginPage;
