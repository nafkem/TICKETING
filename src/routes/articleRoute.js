import express from "express";
import bcrypt from "bcryptjs";
import user from "../models/user.js";
import article from "../models/article.js";
import {deleteArticle, getArticle, getanArticle, updateArticle, postArticle} from "../controllers/articleController.js";
const router = express.Router();

//post all articles
router.post("/article", postArticle);

//get all users
router.get("/articles", getArticle);

//get an article
router.get("/article/:id",  getanArticle);

//Update a article
router.put("/articles/:id",updateArticle);

//Delete an article
router.delete("/article/:id", deleteArticle);
export default router;