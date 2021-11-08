import express from "express";
import { connectToDatabase } from "./db";
import { router } from "./route";

const app = express();
const port = 3013;

connectToDatabase()
  .then(() => {
    app.use("/", router);

    app.listen(port, () => {
      console.log(`server running at http://localhost:${port}/`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
