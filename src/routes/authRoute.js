import express from "express";
import user from "../models/user.js";
import CryptoJS from "crypto-js";
//import bcryptJS from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// login===NB:you can login with either your email or phone
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // check the kind of input supplied by the user for login
    const userData =
      await user.findOne({email });

    if (!userData) {
      res.status(401).json({msg:"wrong login credentials, couldn't login",type:"NOT_EXIST",code:603});
    } else {
      const bytes = CryptoJS.AES.decrypt(
        userData.password,
        process.env.PW_CRYPT
      );
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      if (originalPassword !== password) {
        res.status(401).json({msg:"wrong login credentials, couldn't login",type:"WRONG_OR_MISSING_PAYLOAD",code:605});
      } else {
      
        // send a unique secret token for loggedin user
        const accessToken = jwt.sign(
          {
            
                id:userData?.id,
                name: userData?.name,
                email: userData?.email 
          },
          process.env.PW_CRYPT,
          { expiresIn: "2d" }
        );
        //do not include the password when sending query response
        const { password: dbPword, ...data } = userData._doc;
        res.status(200).json({msg:{ ...data, accessToken }, type:"SUCCESS",code:600});
      }
    }
  } catch (err) {
    res.status(500).json({msg:err,type:"FAILED",code:602});
  }
});

// login===NB:you can login with either your email or phone
router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  const id = "" + Math.floor(Math.random() * 1000000 + 1);
  const userData = new user({
    id: id,
    name,
    email,
    password:CryptoJS.AES.encrypt(
      password, process.env.PW_CRYPT
    ).toString(),
  });
  try {
    const checkuser = await user.findOne({email},'id email');
    if(checkuser) return res.status(403).json({ msg: "A user exist", type: "NOT_EXIST", code: 603 });
    const saveduser = await userData.save();
    res.status(200).json({ msg: saveduser, type: "SUCCESS", code: 600 });
  } catch (error) {
    res.status(500).json({ msg: error, type: "FAILED", code: 601 });
  }
});

export default router;