import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./src/config/dbConfig.js";
import router from "./src/routers/userRouter.js";

const app = express();

const PORT = process.env.PORT || 8000;
// middlewear

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDb();

// Routers
app.use("/api/v1/user", router);
// User router to handle resgistration and login
//transaction router to handle all registration

// handle uncaught error

app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "requested page not found",
  };
  next(error);
});

//global error handlelor

app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
