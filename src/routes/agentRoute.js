import express from "express";
import agent from "../models/agent.js";
const router = express.Router();


router.post("/agent", async (req, res) => {
  const {department
    } = req.body;

  //   const {} = req.user;
    const id = "" + Math.floor(Math.random() * 1000 + 1);
    // const fetchUser = await user.findOne({email})
    // const fetchReporter = await user.findOne({email:reporter_email})
    const agentData = new agent({
    department  
  });

  try {
    const saved = await ticketData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});

//get all user
router.get("/agents", async (req, res) => {
  try {
    const findAgent = await agent.find();
    res.status(200).json({ msg: findAgent, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get a user
router.get("/agent/:id", async (req, res) => {
  const agenttId = req.params.id
  try {
    const findAgent = await agent.findOne({_id:agentId});
    if (!findAgent)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findAgent, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});
export default router;

