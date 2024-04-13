import express from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.js"
import { Fruit } from "../models/fruits.js";
import { Cart, CartItem } from "../models/cart.js";
import Checkout from "../models/checkout.js";
import logger from "../middlewares/logger.js"
import Paystack from "../utils/paystack.js";



const { InitializePayment, VerifyPayment } = Paystack();
const userRouter = express.Router();

userRouter.post("/register", logger, async (req, res) => {
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
        return res.status(500).json({ status: "error", msg: "error occured while logging in"})
    }
});



// Routes for a user's cart items
userRouter.post("/add_to_cart", logger, async(req, res) => {
    const { userId, fruitId, quantity = 1 } = req.body;
    
    try {
        const cart = await Cart.findOne({ user: userId });
        const fruit = await Fruit.findOne({ _id: fruitId });

        if (cart && fruit && (fruit.quantityAvailable > 0)) {

            const newCartItem = new CartItem({ quantity, fruit: fruitId, cart: cart._id })
            await newCartItem.save();

            // Update the quantity of the fruit available
            const updateQuantity = await Fruit.findByIdAndUpdate(fruitId, { quantityAvailable: fruit.quantityAvailable - quantity })

            return res.status(201).json({ status: "ok", msg: "Item added to cart", newCartItem })
        }
        return res.status(404).json({ status: "error", msg: "out of stock" })
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
});



userRouter.get("/cart_items/:id", logger, async(req, res) => {
    let totalPrice = 0;
    let eachPrice;
    const cart_items = [];

    try {
        const items = await CartItem.find({ cart: req.params.id, status: "not paid" });
        if (items) {
            for (let idx = 0; idx < items.length; idx++) {
                let item = {};

                const fruit =  await Fruit.findOne({ _id: items[idx].fruit}, { name: 1, price: 1});
                eachPrice = items[idx].quantity * fruit.price;

                item = { cartItemId: items[idx]._id, fruit, total: eachPrice, quantity: items[idx].quantity }

                cart_items.push(item);

                totalPrice = totalPrice + eachPrice;
            }
            return res.status(200).json({ status: "ok", msg: "cart items retrieved", cart: cart_items, totalPrice })
        }
        return res.status(404).json({ status: "error", msg: "cart not found" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
});




userRouter.put("/cart/:cartId/item/:cartItemId/increase", logger, async(req, res) => {
    try {
        const cart = await Cart.findOne({ _id: req.params.cartId });
        if (!cart) {
            return res.status(404).json({ status: "ok", messsage: "cart not found, incorrect id" });
        }

        const item = await CartItem.findOne({  cart: cart._id, _id: req.params.cartItemId });
        if (!item) {
            return res.status(404).json({ status: "ok", messsage: "Item not found, incorrect id" })
        }

        const fruit = await Fruit.findOne({ _id: item.fruit });

        if ( fruit  && (!(fruit.quantityAvailable))) {
            return res.status(404).json({
                status: "ok", msg: `${fruit.name} is out of stock`})
        }
        const updatedCart = await CartItem.findByIdAndUpdate(req.params.cartItemId, { quantity: item.quantity + 1 });

        const updateQuantity = await Fruit.findByIdAndUpdate(item.fruit, { quantityAvailable: fruit.quantityAvailable - 1 })
        return res.status(200).json({ status: "ok"})
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "ok", message: "Error occurred"}); 
    }
});


userRouter.put("/cart/:cartId/item/:cartItemId/decrease", logger, async(req, res) => {
    try {
        const cart = await Cart.findOne({ _id: req.params.cartId });
        if (!cart) {
            return res.status(404).json({ status: "ok", messsage: "cart not found, incorrect id" });
        }

        const item = await CartItem.findOne({  cart: cart._id, _id: req.params.cartItemId });
        if (!item) {
            return res.status(404).json({ status: "ok", messsage: "Item not found, incorrect id" })
        }

        const fruit = await Fruit.findOne({ _id: item.fruit });

        if ( fruit  && (!(fruit.quantityAvailable))) {
            return res.status(404).json({
                status: "ok", msg: `${fruit.name} is out of stock`})
        }
        const updatedCart = await CartItem.findByIdAndUpdate(req.params.cartItemId, { quantity: item.quantity - 1 });

        const updateQuantity = await Fruit.findByIdAndUpdate(item.fruit, { quantityAvailable: fruit.quantityAvailable + 1 })
        return res.status(200).json({ status: "ok"})
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "ok", message: "Error occurred"}); 
    }
});



userRouter.delete("/remove_from_cart/:id", logger, async(req, res) => {
    try {
        let fruit
        let item = await CartItem.findOne({ _id: req.params.id });
        if (item) {
            // adds the quantityremoved from cart back to the available stock
            fruit = await Fruit.findOne({ _id: item.fruit });
            fruit = await Fruit.findByIdAndUpdate(item.fruit, { quantityAvailable: fruit.quantityAvailable + item.quantity });
            // delete item from cart
            item = await CartItem.findByIdAndDelete(req.params.id);
            res.status(200).json({ status: "ok", message: "item removed from cart" })
        }
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
})





// Checkout Routes
userRouter.post("/checkout/:userId", logger, async(req, res) => {
    const { firstname, lastname, address, city, postalCode, mobile, email, status, userId, total} = req.body;
    try {
        let cart = await CartItem.findOne({ status: "not paid"});
        if (!cart) {
            return res.status(404).json({ status: "error", msg: "no Item on cart"});
        }
        const newCheckout = new Checkout({
            firstname, lastname, address, city,
            postalCode, mobile, email, status, user: userId, cart: req.params.cartId, total
        });

        cart = await Cart.findOne({ user: req.params.userId })
        const payment = await InitializePayment({ email, amount: parseInt(total) * 100 });

        if (payment.data.authorization_url) {
            await newCheckout.save();
            await CartItem.updateMany({ cart: cart._id}, { status: "paid" })
            return res.status(200).json({ status: "ok", ...payment.data });
        }
        return res.status(500).json({ status: "error", message: "Couldn't generate payment link"});

    } catch(err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
});


userRouter.get("/:id/transaction_history", logger, async(req, res) => {
    try {
        const paid = await CartItem.find({ cart: req.params.id, status: "paid" });
        res.status(200).json({ status: "ok", paid })
       } catch(err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
});







export default userRouter;
