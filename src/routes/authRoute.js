import express from "express";
import user from "../models/user.js";
import CryptoJS from "crypto-js";
//import bcryptJS from "bcrypt";
import jwt from "jsonwebtoken";
import {loginUser, registerUser} from "../controllers/authController.js";


const router = express.Router();

// login===NB:you can login with either your email or phone
router.post("/auth/login", loginUser);

// login===NB:you can login with either your email or phone
router.post("/user", registerUser);

export default router;