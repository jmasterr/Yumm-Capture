import { Request, Response, NextFunction } from "express";
import SavedRecipe from "../../models/SavedRecipe";

const getSavedRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const savedRecipes = await SavedRecipe.find({
      user: req.params.userId,
    }).select("-__v");
    return res.status(200).send({ data: savedRecipes });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};

export default getSavedRecipes;
