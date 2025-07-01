import express from "express";
import bcrypt from "bcryptjs";
import user from "../models/user.js";
import {deleteUser, getUser, getaUser, updateUser} from "../controllers/userController.js";

const router = express.Router();

//get all users
router.get("/users", getUser);

//get a user
router.get("/users/:user_id/info", getaUser);

//Update a user
router.put("/user/:id", updateUser);

//Delete an article
router.delete("/user/:id",deleteUser);
export default router;

