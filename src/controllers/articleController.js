import article from "../models/article.js";


//get user
export const postArticle = async (req, res) => {
  const {title,
    content,
    category_id,
    author_id
  } = req.body;
  
  const articleData = new article({
    title,
    content,
    category_id,
    author_id

});
  try {
     
    const saved = await articleData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
}
export const getArticle = async (req, res) => {
  try {
    const findArticle = await article.find();
    if (!findArticle)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findArticle, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}

export const getanArticle = async (req, res) => {
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
}

export const updateArticle =  async (req, res) => {
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
}
export const deleteArticle = async (req, res) => {
  console.log('1');
  const articleId = req.params.id
  //const data = req.body

  try {
    console.log('2');
  const findArticle = await article.findOne({_id:articleId});
  console.log('3');
    console.log(findArticle);
    if (!findArticle)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const deleteArticle = await article.findByIdAndDelete(articleId);

    res.status(200).json({ msg:`Article with id:${deleteArticle._id} has been deleted`, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}