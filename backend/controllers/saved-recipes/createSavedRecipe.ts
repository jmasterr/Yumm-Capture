import { Request, Response, NextFunction } from "express";
import SavedRecipe, { savedRecipeValidator } from "../../models/SavedRecipe";
import transformValidationError from "../../helpers/transformValidationErrors";
import ISavedRecipe from "../../contracts/ISavedRecipe";

const createSavedRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = savedRecipeValidator(req.body);

    if (error) {
      let errors = transformValidationError(error);
      return res.status(400).send({ validationErrors: errors });
    }

    let savedRecipe;

    const { title, photoUrl, apiId, directions, user, calories }: ISavedRecipe =
      req.body;

    savedRecipe = new SavedRecipe<ISavedRecipe>({
      title,
      photoUrl,
      apiId,
      directions,
      user,
      calories,
    });

    savedRecipe = await savedRecipe.save();

    return res.status(201).send({
      data: savedRecipe,
    });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};
export default createSavedRecipe;
