import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.js"
import { Cart } from "../models/cart.js";
import ContactUs from "../models/contact.js";
import sendMail from "../utils/send_email.js";
import randomPassword from "../utils/random_password.js";


const signup = async (req, res) => {
    let { surname, firstname, email, password, phoneNo } = req.body;
    try {
        const userExist = await User.findOne({ email });
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

 
        // Create cart for user
        const cart = new Cart({ user: newUser._id })
        await cart.save()

        return res.status(201).json({ status: "ok", msg: "Registration successful", newUser, cart })
    } catch(err) {
        console.log(err);
        // error logger to be put here
        return res.status(500).json({ status: "error", msg: "error occured during registration"})
    }
}


const signin = async (req, res) => {
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
            return res.status(400).json({ status: 'error', msg: 'incorrect password' });
        }

        // Retrieve user's cart
        const cart = await Cart.findOne({ user: user._id })
        // removes password from response send to the frontend
        user.password = "";

         // generates jwt
         // Normally (in production) secret keys should be save in the environment variables
         const token = jsonwebtoken.sign({ id: user._id }, "secretKey", { expiresIn: '32h' });
         res.setHeader('Access-Control-Expose-Headers', 'Authorization');
         res.status(200).header('Authorization', `Bearer ${token}`).json({ status: 'ok', user, cart });
    } catch (err) {
        // error logger goes here
        console.log(err)
        return res.status(500).json({ status: "error", msg: "error occured while logging in"});
    }
}


const forgotPassword = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: "error", msg: "Account not found"})
        }

        // Generates a random password
        let newPwd = await randomPassword(7, "alphaNumeric");

        const content = `<p>Hello ${user.firstname}</p> <br> <p>Your new password is ${newPwd}</p>`
        const salt = await bcrypt.genSalt(10);
        newPwd = await bcrypt.hash(newPwd, salt);

        await sendMail(user.email, "New Password", content);
        await User.findByIdAndUpdate(user._id, { password: newPwd });
        return res.status(200).json({ status: "ok", msg: "A new password has been sent to your mail"})
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "error occured, try again later"});
    }
}


const contactUs = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        let contactUs = new ContactUs({ name, email, message });
        const content = `<p>From ${name}</p><br><p>Customer's email: ${email}</p><br>Message: ${message}`;
        await sendMail("deborahonaojosule@gmail.com", "Customer Request", content);
        await contactUs.save();
        return res.status(200).json({
            status: "ok", message: "Thank you for reaching out to Fruitables, you message will be attended to in due time"
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "error", message: "Error occurred, try again later"});
    }
}

export { signup,  signin, forgotPassword, contactUs };