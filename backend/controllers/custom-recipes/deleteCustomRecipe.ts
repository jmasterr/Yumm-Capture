import { Request, Response, NextFunction } from "express";
import CustomRecipe, { customRecipeValidator } from "../../models/CustomRecipe";

const deleteCustomRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const customRecipe = await CustomRecipe.findByIdAndDelete(id);

    if (!customRecipe)
      return res.status(404).send({ error: "Custom recipe was not found" });

    return res.sendStatus(200);
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};
export default deleteCustomRecipe;
