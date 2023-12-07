import mongoose from "mongoose";
import colors from "colors";
import databaseURL from "../constants/databaseURL";

const db = () => {
  mongoose
    .connect(databaseURL!)
    .then(() => console.log(colors.cyan("Connected to MongoDB 🙌!")))
    .catch((e) => console.log(colors.red(e)));

  // starts the mongoose debug mode when in development
  if (process.env.NODE_ENV === "development") {
    mongoose.set("debug", true);
  }
};

export default db;
