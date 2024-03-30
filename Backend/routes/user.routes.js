import express from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.js"
import logger from "../middlewares/logger.js"

const userRouter = express.Router();

userRouter.post("/register", logger, async (req, res) => {
    let { surname, firstname, email, password, phoneNo } = req.body;

    try {
        const userExist = await User.find({ email });
        if (userExist) {
            return res.status(400).json({ status: "error", msg: "This email has been used"})
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});   
    }

    
    try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
    } catch (err) {
        // error logger to be put here
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }

    try {
        const newUser = new User({ surname, firstname, email, password, phoneNo });
        await newUser.save();
        delete newUser.password;
        return res.status(201).json({ status: "ok", msg: "Registration successful", newUser })
    } catch(err) {
        console.log(err);
        // error logger to be put here
        return res.status(500).json({ status: "error", msg: "error occured during registration"})
    }
});


userRouter.post('/login', logger, async (req, res) => {
    const { password, email } = req.body;

    if (!password) {
        res.status(400).json({ status: 'error', msg: 'password missing' });
        return;
    }
    if (!email) {
        res.status(400).json({ status: 'error', msg: 'username missing' });
        return;
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: "error", msg: "account not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ status: 'error', message: 'incorrect password' });
        }

        // removes password from response send to the frontend
        user.password = "";

         // generates jwt
         // Normally (in production) secret keys should be save in the environment variables
         const token = jsonwebtoken.sign({ email: user.email }, "secretKey", { expiresIn: '32h' });
         res.setHeader('Access-Control-Expose-Headers', 'Authorization');
         res.status(200).header('Authorization', `Bearer ${token}`).json({ status: 'ok', user });
    } catch (err) {
        // error logger goes here
        console.log(err)
        return res.status(500).json({ status: "error", msg: "error occured while logging in"})
    }
});

export default userRouter;