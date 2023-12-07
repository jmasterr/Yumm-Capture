import { Router } from "express";
import checkAuth from "../middleware/checkAuth";
import login from "../controllers/user/login";

const usersRouter = Router();

usersRouter.post("/login", [], login);

export default usersRouter;
