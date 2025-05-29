import express from "express";
import category from "../models/category.js";
const router = express.Router();


//Post users
router.post("/categories", async (req, res) => {
  const{
    name                
    }= req.body;

//   const {} = req.user;
    const id = "" + Math.floor(Math.random() * 1000 + 1);
    const fetchCategory = await user.findOne({email})
    const categoryData = new user({
      //id:,
                name
      });

  try {     
   const saved = await categoryData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});  

//get all users
router.get("/categories", async (req, res) => {
  try {
    const findcategory = await category.find();
    if (!findcategory)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: finduser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get a user
router.get("/categories/:categories_id", async (req, res) => {
  try {
    const findcategory = await user.findOne({ _id: req.params?.user_id }, '-password');
    if (!findcategory)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: finduser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});
export default router;