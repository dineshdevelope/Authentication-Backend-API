import express from "express";
import userRoute from "./routes/user.route.js";
import connectDB from "./lib/db.js";

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
