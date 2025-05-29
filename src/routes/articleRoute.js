import express from "express";
import article from "../models/article.js";
import user from "../models/user.js";
const router = express.Router();


router.post("/article", async (req, res) => {
  const {title,
    content,
    category,
    author_id   } = req.body;

  //   const {} = req.user;
    const id = "" + Math.floor(Math.random() * 1000 + 1);
    const fetchArticle = await user.findOne({email})
    const articleData = new article({
    id,
    content,
    category,
    author_id 
  });

  try {
    const saved = await articleData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});

//get a user
router.get("/articles", async (req, res) => {
  try {
    const findArticle = await article.find();
    res.status(200).json({ msg: findArticle, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get a user
router.get("/article/:id", async (req, res) => {
  const articleId = req.params.id
  try {
    const findArticle = await article.findOne({_id:articleId});
    if (!findArticle)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findArticle, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//Update a article
router.put("/article/:id", async (req, res) => {
  const articleId = req.params.id
  const data = req.body

  try {
  const findArticle = await article.findOne({_id:articleId});
    if (!findArticle)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const updateArticle = await article.findByIdAndUpdate(articleId,data,{new:true});

    res.status(200).json({ msg: updateArticle, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//Delete a article
router.delete("/article/:id", async (req, res) => {
  const articleId = req.params.id
  //const data = req.body

  try {
  const findArticle = await article.findOne({_id:articleId});
    if (!findArticle)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const deleteArticle = await article.findByIdAndDelete(articleId);

    res.status(200).json({ msg:`Article with id:${deleteArticle._id} has been deleted`, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});
export default router;