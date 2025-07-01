import category from "../models/category.js";


//post category
export const postCategory = async (req, res) => {
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
}

export const getCategory = async (req, res) => {
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
}

export const getaCategory = async (req, res) => {
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
}