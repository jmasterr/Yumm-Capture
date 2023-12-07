import { Request, Response, NextFunction } from "express";
import CustomRecipe, { customRecipeValidator } from "../../models/CustomRecipe";
import transformValidationErrors from "../../helpers/transformValidationErrors";
import ICustomRecipe from "../../contracts/ICustomRecipe";

const updateCustomRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const { error } = customRecipeValidator(req.body);

    if (error) {
      let errors = transformValidationErrors(error);
      return res.status(400).send({ validationErrors: errors });
    }

    const { title, directions, calories }: ICustomRecipe = req.body;

    console.log(req.body);

    const customRecipe = await CustomRecipe.findByIdAndUpdate(
      id,
      {
        title: title,
        directions: directions,
        calories: calories,
      },
      { new: true }
    );

    if (!customRecipe)
      return res.status(404).send({ error: "Custom recipe was not found" });

    return res.status(201).send({
      data: customRecipe,
    });
  } catch (error: any) {
    return res.status(400).send({ error: error }); // returns an error if the async function doesn't work
  }
};
export default updateCustomRecipe;
