import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://davdev:HmcypieUT6lUF8UZ@recipes.wb7ip.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes"
);

app.listen(process.env.PORT || 3001, () => console.log("Server is running..."));
