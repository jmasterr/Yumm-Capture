import { Request, Response, NextFunction } from "express";
import CustomRecipe, { customRecipeValidator } from "../../models/CustomRecipe";
import transformValidationError from "../../helpers/transformValidationErrors";
import ICustomRecipe from "../../contracts/ICustomRecipe";

const createCustomRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = customRecipeValidator(req.body);

    if (error) {
      let errors = transformValidationError(error);
      return res.status(400).send({ validationErrors: errors });
    }

    let customRecipe;

    const { title, directions, user, calories }: ICustomRecipe = req.body;

    customRecipe = new CustomRecipe<ICustomRecipe>({
      title,
      directions,
      user,
      calories,
    });

    customRecipe = await customRecipe.save();

    return res.status(201).send({
      data: customRecipe,
    });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};
export default createCustomRecipe;
