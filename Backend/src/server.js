import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import { httpServer } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectToDB()
  .then(() => {
    httpServer.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed: ", err);
    process.exit(1);
  });
