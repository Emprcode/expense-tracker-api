import express from "express";
import { createUser } from "../models/user/UserModel.js";

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("got hit to all router");
  next();
});

router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: "OK",
          message: "Insert user done Successfully",
        })
      : res.json({
          status: "error",
          message: "unable to add user, please try again",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.errorCode = 200;
      error.message =
        "This email is already in use, Please use different email";
    }
    next(error);
  }
});

export default router;
