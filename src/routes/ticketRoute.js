import express from "express";
import ticket from "../models/ticket.js";
import user from "../models/user.js";
import category from "../models/category.js";
import {deleteTicket, getTicket, getaTicket, updateTicket, postTicket, getAttachments, getComments} from "../controllers/ticketController.js";
const router = express.Router();

router.post("/ticket",postTicket);

//get a ticket
router.get("/tickets", getTicket);

//get a user
router.get("/ticket/:id", getaTicket);

//Update a ticket
router.put("/ticket/:id", updateTicket);

//Delete a ticket
router.delete("/ticket/:id",deleteTicket);

//get comment ticket
router.get("/ticket/:id/comments", getComments);

//get comment attachment
router.get("/ticket/:id/attachments", getAttachments);
export default router;