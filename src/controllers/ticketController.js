import ticket from "../models/ticket.js";


 export const postTicket = async (req, res) => {

  const {title,
    description,
    status,
    priority,
    email,
    reporter_email,
    category_name,
    tags   } = req.body;

  //   const {} = req.user;
    const fetchUser = await user.findOne({email})
    const fetchReporter = await user.findOne({email:reporter_email})
    let checkCategory = await category.findOne({name:category_name})
    if (!checkCategory){
      const newCategory = new category({
        name:category_name
      });
      checkCategory = await newCategory.save()
    }
    
    const ticketData = new ticket({
    title,
    description,
    status,
    assigned_to:fetchUser?._id,
    priority,
    reporter:fetchReporter?._id,
    category:checkCategory?._id,
    tags  
  });

  try {
     
    const saved = await ticketData.save();
    await user.findByIdAndUpdate(fetchUser._id,{role:"Agent"},{new:true});
    res.status(200).json({ msg: "success",data:saved, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
}

export const getTicket = async (req, res) => {
  try {
    const findTicket = await ticket.find();
    res.status(200).json({ msg: findTicket, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 602 });
  }
}


export const getaTicket = async (req, res) => {
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
}

export const updateTicket = async (req, res) => {
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
}

export const deleteTicket = async (req, res) => {
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
}

export const getComments = async (req, res) => {
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
}

export const getAttachments = async (req, res) => {
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
}