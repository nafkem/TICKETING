import express from "express";
import user from "../models/user.js";
const router = express.Router();


//Post users
router.post("/user", async (req, res) => {
  const{
                //id:,
                name,
                email,
                password,
                role,    
}= req.body;

//   const {} = req.user;
    const id = "" + Math.floor(Math.random() * 1000 + 1);
    const fetchUser = await user.findOne({email})
    const fetchReporter = await user.findOne({email:reporter_email})
    const userData = new user({
      //id:,
                name,
                email,
                password,
                role,
      });

  try {     
   const saved = await userData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});  

//get all users
router.get("/users", async (req, res) => {
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
});

//get a user
router.get("/users/:user_id/info", async (req, res) => {
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
});

//Update a user
router.put("/user", async (req, res) => {
  const userId = req.params.id
  const data = req.body

  try {
  const findUser = await user.findOne({_id:userId});
    if (!findUser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const updateUser = await ticket.findByIdAndUpdate(userId,data,{new:true});

    res.status(200).json({ msg: updateUser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//Delete a ticket
router.delete("/user", async (req, res) => {
  const userId = req.params.id
  //const data = req.body

  try {
  const findUser = await user.findOne({_id:userId});
    if (!findUser)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const deleteUser = await user.findByIdAndDelete(userId);

    res.status(200).json({ msg:`Ticket with id:${deleteUser._id} has been deleted`, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});
export default router;

