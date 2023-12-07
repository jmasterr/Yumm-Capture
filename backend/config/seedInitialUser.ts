import User from "../models/User";
import colors from "colors";

const seedInitialUser = async () => {
  try {
    let initialUser;

    initialUser = await User.findOne({ username: "initialUser" });
    if (initialUser)
      return console.log(colors.bgBlue("Initial User already exists!"));

    initialUser = new User({
      username: "initialUser",
      password: "Abc123!@",
      savedRecipes: [],
      customRecipes: [],
    });

    initialUser = await initialUser.save();

    return console.log(colors.bgBlue("Initial User created!"));
  } catch (error) {
    return console.error(error);
  }
};

export default seedInitialUser;
