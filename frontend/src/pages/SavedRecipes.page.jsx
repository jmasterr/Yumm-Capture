import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Wrap, WrapItem, Center, Image, Text } from "@chakra-ui/react";
import { getSavedRecipes } from "../store/actions/saved-recipes/savedRecipes.action-creators";
import Nav from "../components/Nav";

const SavedRecipesPage = () => {
  const dispatch = useDispatch();
  const isGettingSavedRecipes = useSelector(
    (state) => state.savedRecipes.isGettingSavedRecipes
  );
  const savedRecipes = useSelector((state) => state.savedRecipes.savedRecipes);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getSavedRecipes(user._id));
  }, [dispatch, user]);

  if (isGettingSavedRecipes) return null;

  const renderSavedRecipes = () => {
    return savedRecipes.map((savedRecipe) => (
      <WrapItem key={savedRecipe._id}>
        <Center
          w={200}
          padding="20px"
          bg="red.200"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Image
            src={savedRecipe.photoUrl}
            style={{ width: 160, height: 80 }}
            objectFit="contain"
          />
          <Text as={"b"} noOfLines={2}>
            {savedRecipe.title} ({savedRecipe.calories || "N/A"} Calories)
          </Text>
          <Text noOfLines={5} fontSize="small">
            {savedRecipe.directions}
          </Text>
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
          {renderSavedRecipes()}
        </Wrap>
      </div>
    </>
  );
};

export default SavedRecipesPage;
