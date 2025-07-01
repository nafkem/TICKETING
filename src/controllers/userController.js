import user from "../models/user.js";


//get user
export const getUser = async (req, res) => {
  try {
    const finduser = await user.find();
    if (!finduser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: finduser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}
    //get a user
export const getaUser = async (req, res) => {
  try {
    const finduser = await user.findOne({ _id: req.params?.user_id }, '-password');
    if (!finduser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: finduser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}
//put or update a user

export const updateUser = async (req, res) => {
  const userId = req.params.id
  const data = req.body

  try {
  const findUser = await user.findOne({_id:userId});
    if (!findUser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const updateUser = await user.findByIdAndUpdate(userId,data,{new:true});

    res.status(200).json({ msg: updateUser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}

//delete a user

export const deleteUser = async (req, res) => {
  const userId = req.params.id
  //const data = req.body

  try {
  const findUser = await user.findOne({_id:userId});
    if (!findUser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const deleteUser = await user.findByIdAndDelete(userId);

    res.status(200).json({ msg:`User with id:${deleteUser._id} has been deleted`, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}