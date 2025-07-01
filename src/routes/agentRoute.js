import express from "express";
import agent from "../models/agent.js";
import user from "../models/user.js";
import ticket from "../models/ticket.js";
import {getAgent, getanAgent, postAgent, getAgentTicket} from "../controllers/agentController.js";


const router = express.Router();

router.get("/agents/:id/tickets", getAgentTicket);

router.post("/agents", postAgent);


//get all agents
router.get("/agents", getAgent);



//get a user
router.get("/agent/:id", getanAgent);

export default router;

