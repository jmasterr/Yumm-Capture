import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import {
  Text,
  Stack,
  Input,
  Button,
  WrapItem,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomRecipe,
  deleteCustomRecipe,
  getCustomRecipes,
} from "../store/actions/custom-recipes/customRecipes.action-creators.js";
import { useNavigate } from "react-router-dom";

const CustomRecipesPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const customRecipes = useSelector(
    (state) => state.customRecipes.customRecipes
  );
  const isGettingCustomRecipes = useSelector(
    (state) => state.customRecipes.isGettingCustomRecipes
  );
  const user = useSelector((state) => state.user);
  const isCreatingCustomRecipe = useSelector(
    (state) => state.customRecipes.isCreatingCustomRecipe
  );

  useEffect(() => {
    dispatch(getCustomRecipes(user._id));
  }, [dispatch, user]);

  const [title, setTitle] = useState("");
  const [directions, setDirections] = useState("");
  const [calories, setCalories] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDirectionsChange = (event) => setDirections(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);

  const onSaveClick = () => {
    const recipe = {
      title: title,
      directions: directions,
      calories: calories,
    };

    const userId = user._id;

    dispatch(createCustomRecipe(recipe, userId));
  };

  const onEditRecipeClick = (customRecipe) => {
    navigate(`/custom-recipes/${customRecipe._id}`);
  };

  const onDeleteRecipeClick = (customRecipe) => {
    const recipeId = customRecipe._id;
    dispatch(deleteCustomRecipe(recipeId));
  };

  const renderCustomRecipes = () => {
    return customRecipes.map((customRecipe) => (
      <WrapItem key={customRecipe._id}>
        <Center
          w={200}
          padding="20px"
          bg="red.200"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Text as={"b"} noOfLines={2}>
            {customRecipe.title} ({customRecipe.calories || "N/A"} Calories)
          </Text>
          <Text noOfLines={5} fontSize="small">
            {customRecipe.directions}
          </Text>
          <Button onClick={() => onEditRecipeClick(customRecipe)}>
            Edit Recipe
          </Button>
          <Button
            colorScheme="red"
            onClick={() => onDeleteRecipeClick(customRecipe)}
          >
            Delete Recipe
          </Button>
        </Center>
      </WrapItem>
    ));
  };

  if (isGettingCustomRecipes) return null;

  return (
    <>
      <Nav />
      <div style={styles.pageWrapper}>
        <div style={styles.loginForm}>
          <Text fontSize="4xl" align="center">
            New Recipe
          </Text>
          <Text fontSize="xl" align="center">
            Fill out the form to create a new recipe
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
              isLoading={isCreatingCustomRecipe}
              onClick={onSaveClick}
              size="md"
              colorScheme="blue"
            >
              Save
            </Button>
          </Stack>
        </div>
      </div>
      <div
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Wrap marginTop={10} spacing={2}>
          {renderCustomRecipes()}
        </Wrap>
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

export default CustomRecipesPage;
