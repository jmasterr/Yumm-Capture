import { Request, Response, NextFunction } from "express";
import CustomRecipe from "../../models/CustomRecipe";

const getCustomRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customRecipes = await CustomRecipe.find({
      user: req.params.userId,
    }).select("-__v");
    return res.status(200).send({ data: customRecipes });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};

export default getCustomRecipes;
