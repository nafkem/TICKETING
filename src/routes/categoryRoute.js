import express from "express";
import category from "../models/category.js";
import {getCategory, postCategory, getaCategory} from "../controllers/categoryController.js";


const router = express.Router();


//Post users
router.post("/categories", postCategory);  

//get all users
router.get("/categories", getCategory);

//get a user
router.get("/categories/:categories_id", getaCategory);
export default router;