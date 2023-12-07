import { Request, Response, NextFunction } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import generateAccessToken from "../../helpers/generateAccessToken";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let user; // defines the user variable

    user = await User.findOne({ username: req.body.username }); // looks for the user in the db
    if (!user)
      return res
        .status(401)
        .send({ error: "Username or password are incorrect" }); // returns an error if the user email is wrong

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    ); // compares if the password sent up is the correct password in the db

    console.log(validPassword);

    if (!validPassword)
      return res
        .status(401)
        .send({ error: "Username or password are incorrect" }); // returns an error if the password is invalid

    user = await User.findById(user._id).select("-__v -password"); // gets the user from the db
    if (!user) return res.status(404).send({ error: "User was not found" }); // if the user doesn't exist, it returns an error

    user = await User.findById(user._id).select(
      "-__v -password -refreshTokens -savedRecipes -customRecipes"
    ); // gets the user again without the password, the refresh tokens, and the push tokens
    if (!user) return res.status(404).send({ error: "User was not found" }); // returns an error if the user is not found

    const accessToken = generateAccessToken({
      _id: user._id,
    }); // generates a new access token

    const userResObj = {
      user: user,
      accessToken: accessToken,
    }; // the object with the login response

    return res.status(200).send(userResObj); // sends the user object to the client
  } catch (error: any) {
    console.log(error);
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};

export default login;
