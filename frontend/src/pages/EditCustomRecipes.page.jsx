import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Text, Stack, Input, Button } from "@chakra-ui/react";
import { updateCustomRecipe } from "../store/actions/custom-recipes/customRecipes.action-creators";

const EditCustomRecipesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const customRecipe = useSelector((state) =>
    state.customRecipes.customRecipes.find(
      (customRecipe) => customRecipe._id === id
    )
  );
  const isUpdatingCustomRecipe = useSelector(
    (state) => state.customRecipes.isUpdatingCustomRecipe
  );

  const [title, setTitle] = useState(customRecipe.title || "");
  const [directions, setDirections] = useState(customRecipe.directions || "");
  const [calories, setCalories] = useState(customRecipe.calories || "");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDirectionsChange = (event) => setDirections(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);

  const onUpdateRecipeClick = () => {
    const recipe = {
      _id: customRecipe._id,
      title: title,
      directions: directions,
      calories: calories,
    };
    dispatch(updateCustomRecipe(recipe, navigate));
  };

  if (!customRecipe) return null;

  return (
    <>
      <Nav />
      <div style={styles.pageWrapper}>
        <div style={styles.loginForm}>
          <Text fontSize="4xl" align="center">
            Update Recipe
          </Text>
          <Text fontSize="xl" align="center">
            Fill out the form to update the recipe
          </Text>
          <Stack marginTop={25} spacing={3}>
            <Input
              onChange={handleTitleChange}
              value={title}
              variant="filled"
              placeholder="Title"
              size="md"
            />
            <Input
              onChange={handleDirectionsChange}
              value={directions}
              variant="filled"
              placeholder="Directions"
              size="md"
            />
            <Input
              onChange={handleCaloriesChange}
              value={calories}
              variant="filled"
              placeholder="Calories"
              size="md"
            />
            <Button
              isLoading={isUpdatingCustomRecipe}
              onClick={onUpdateRecipeClick}
              size="md"
              colorScheme="blue"
            >
              Save
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

const styles = {
  pageWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    width: 400,
  },
};

export default EditCustomRecipesPage;
