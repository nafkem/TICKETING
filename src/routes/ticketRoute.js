import express from "express";
import ticket from "../models/ticket.js";
import user from "../models/user.js";
const router = express.Router();

router.post("/ticket", async (req, res) => {
  const {title,
    description,
    status,
    priority,
    email,
    reporter_email,
    category,
    tags   } = req.body;

  //   const {} = req.user;
    const id = "" + Math.floor(Math.random() * 1000 + 1);
    const fetchUser = await user.findOne({email})
    const fetchReporter = await user.findOne({email:reporter_email})
    const ticketData = new ticket({
    id,
    title,
    description,
    status,
    assigned_to:fetchUser?._id,
    priority,
    reporter:fetchReporter?._id,
    category,
    tags  
  });

  try {
     
//    // const checkFor = await Subjects.findOne({ title,school }, "title");
//     if (checkForSubject) {
//       return res
//         .status(403)
//         .json({ msg: "subject already exist for this school", type: "EXIST", code: 602 });
//     }
    const saved = await ticketData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});

//get a user
router.get("/tickets", async (req, res) => {
  try {
    const findTicket = await ticket.find();
    // if (!finduser)
    //   return res
    //     .status(200)
    //     .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findTicket, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get a user
router.get("/ticket/:id", async (req, res) => {
  const ticketId = req.params.id
  try {
    const findTicket = await ticket.findOne({_id:ticketId});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findTicket, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//Update a ticket
router.put("/ticket/:id", async (req, res) => {
  const ticketId = req.params.id
  const data = req.body

  try {
  const findTicket = await ticket.findOne({_id:ticketId});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const updateTicket = await ticket.findByIdAndUpdate(ticketId,data,{new:true});

    res.status(200).json({ msg: updateTicket, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//Delete a ticket
router.delete("/ticket/:id", async (req, res) => {
  const ticketId = req.params.id
  //const data = req.body

  try {
  const findTicket = await ticket.findOne({_id:ticketId});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });

  const deleteTicket = await ticket.findByIdAndDelete(ticketId);

    res.status(200).json({ msg:`Ticket with id:${deleteTicket._id} has been deleted`, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get comment ticket
router.get("/ticket/:id/comments", async (req, res) => {
  const ticketId = req.params.id
  try {
    const findTicket = await ticket.findOne({_id:ticketId});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findTicket.comments, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});

//get comment ticket
router.get("/ticket/:id/attachments", async (req, res) => {
  const ticketId = req.params.id
  try {
    const findTicket = await ticket.findOne({_id:ticketId});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findTicket.attachments, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
});
export default router;