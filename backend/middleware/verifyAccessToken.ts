import jwt, { JwtPayload } from "jsonwebtoken";
import authConfig from "../constants/authConfig";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

const verifyAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.header("Authorization")?.replace("Bearer ", ""); // grabs the token from the Authorization: "Bearer" header

    if (!token)
      return res
        .status(403)
        .send({ error: "Access denied. No token provided!" }); // if the token wasn't provided in the header, it will return an error

    const decoded = jwt.verify(token, authConfig.jwtSecret, {
      ignoreExpiration: true,
    }); // it decodes the JWT token provided
    (req as CustomRequest).user = decoded; // it sets a property to the request object called "user". "user" holds the decoded data

    next(); // continues to the next function
  } catch (error: any) {
    return res.status(401).send({ error: error }); // it returns the error if the promise fails
  }
};

export default verifyAccessToken;
