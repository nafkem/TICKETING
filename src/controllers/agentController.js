import agent from "../models/agent.js";


//post agent
export const postAgent = async (req, res) => {
  const {
    department,
    user_id,
    ticket_id

     } = req.body;

    const fetchTicket = await ticket.findOne({_id:ticket_id})
    const fetchUser = await user.findOne({_id:user_id})

    if(!fetchTicket||!fetchUser){
        return(res.status(400).json({
           msg:'Invalid Ticket or User' 
        }))
    }
    const agentData = new agent({

    department,
    assigned_to:fetchTicket?._id,
    ticket_owner:fetchUser?._id,
  });

  try {
     
  const saved = await agentData.save();
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
}

//get user
export const getAgentTicket = async (req, res) => {
    const agent_id = req.params.id 
  try {
    const findTicket = await ticket.find({ assigned_to:agent_id});
    if (!findTicket)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findTicket, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}

export const getanAgent = async (req, res) => {
  try {
    const findAgent = await user.find({role:"Agent"});
    if (!findAgent)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findAgent, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}
export const getAgent =async (req, res) => {
  const agentId = req.params.id
  try {
    const findAgent = await user.findOne({role:"Agent",_id:agentId});
    if (!findAgent)
      return res
        .status(200)
        .json({ msg: "No record found", type: "NOT_EXIST", code: 603 });
    res.status(200).json({ msg: findAgent, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}


