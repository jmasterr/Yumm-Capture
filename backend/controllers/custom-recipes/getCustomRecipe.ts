import { Request, Response, NextFunction } from "express";
import CustomRecipe from "../../models/CustomRecipe";

const getCustomRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const customRecipe = await CustomRecipe.findById(id);

    if (!customRecipe)
      return res.status(404).send({ error: "Custom Recipe was not found" });

    return res.status(200).send({
      data: customRecipe,
    });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};

export default getCustomRecipe;
