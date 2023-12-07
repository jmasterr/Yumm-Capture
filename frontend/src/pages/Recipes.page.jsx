import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../store/actions/recipes/recipes.action-creators";
import Nav from "../components/Nav";
import { Button, Center, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { createSavedRecipe } from "../store/actions/saved-recipes/savedRecipes.action-creators";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const isGettingRecipes = useSelector(
    (state) => state.recipes.isGettingRecipes
  );
  const recipes = useSelector((state) => state.recipes.recipes);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (isGettingRecipes) return null;

  const onSaveRecipeClick = (recipe) => {
    dispatch(createSavedRecipe(recipe, user._id));
  };

  const renderRecipes = () => {
    return recipes.map((recipe) => (
      <WrapItem key={recipe.id}>
        <Center
          w={500}
          h={300}
          padding="20px"
          bg="red.200"
          style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}
        >
          <Image
            src={recipe.photoUrl}
            style={{ width: 160, height: 80 }}
            objectFit="contain"
          />
          <Text as={"b"} noOfLines={2}>
            {recipe.title} ({recipe.calories || "N/A"} Calories)
          </Text>
          <Text noOfLines={5} fontSize="small">
            {recipe.directions}
          </Text>
          <Button onClick={() => onSaveRecipeClick(recipe)}>Save Recipe</Button>
        </Center>
      </WrapItem>
    ));
  };

  return (
    <>
      <Nav />
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
          {renderRecipes()}
        </Wrap>
      </div>
    </>
  );
};

export default RecipesPage;
