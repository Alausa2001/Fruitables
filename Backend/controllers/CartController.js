import { Fruit } from "../models/fruits.js";
import { Cart, CartItem } from "../models/cart.js";
import Checkout from "../models/checkout.js";
import Paystack from "../utils/paystack.js"


const { InitializePayment, VerifyPayment } = Paystack();



const addToCart = async(req, res) => {
    const { userId, fruitId, quantity = 1 } = req.body;
    
    try {
        const cart = await Cart.findOne({ user: userId });
        const fruit = await Fruit.findOne({ _id: fruitId });

        if (cart && fruit && (fruit.quantityAvailable > 0)) {

            const newCartItem = new CartItem({ quantity, fruit: fruitId, cart: cart._id })
            await newCartItem.save();

            return res.status(201).json({ status: "ok", msg: "Item added to cart", newCartItem })
        }
        return res.status(404).json({ status: "error", msg: "out of stock" })
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
}


const getCartItems = async (req, res) => {
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
}



const increaseItemQuantity = async (req, res) => {
    try {
        const cart = await Cart.findOne({ _id: req.params.cartId });
        if (!cart) {
            return res.status(404).json({ status: "ok", msg: "cart not found, incorrect id" });
        }

        const item = await CartItem.findOne({  cart: cart._id, _id: req.params.cartItemId });
        if (!item) {
            return res.status(404).json({ status: "ok", msg: "Item not found, incorrect id" })
        }

        const fruit = await Fruit.findOne({ _id: item.fruit });

        if ( fruit  && (!(fruit.quantityAvailable))) {
            return res.status(404).json({
                status: "ok", msg: `${fruit.name} is out of stock`})
        }
        const updatedCart = await CartItem.findByIdAndUpdate(req.params.cartItemId, { quantity: item.quantity + 1 });

        return res.status(200).json({ status: "ok", msg: "Item quantity has been increased by 1" });
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "ok", msg: "Error occurred"}); 
    }
}


const decreaseItemQuantity = async (req, res) => {
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
        return res.status(200).json({ status: "ok", msg: "Item quantity has been decreased by 1" })
 
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "ok", message: "Error occurred"}); 
    }
}


const removeItemFromCart = async (req, res) => {
    try {
        let item = await CartItem.findOne({ _id: req.params.id });
        if (item) {
            // delete item from cart
            item = await CartItem.findByIdAndDelete(req.params.id);
            return res.status(200).json({ status: "ok", message: "item removed from cart" })
        }
        return res.status(404).json({ status: "ok", message: "item not found incorrect id" })
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
}


const checkout = async (req, res) => {
    const { firstname, lastname, address, city, postalCode, mobile, email, status, userId, total, cartItems} = req.body.formData;
    try {
        let quantityInStock;
        for (let item of cartItems) {
            const fruit = await Fruit.findOne({ _id: item._id });

            if (!fruit) {
                return res.status(404).json({ status: "error", message: `${item.name} (${item.category}) not in stock`})
            }

            quantityInStock = fruit.quantityAvailable;
            if (quantityInStock < parseInt(item.quantity)) {
                return res.status(400).json({
                    status: "error",
                    message: `Only ${quantityInStock} of ${item.name} (${item.category}) is available, you selected ${item.quantity}`});
            }
        }

        const newCheckout = new Checkout({
            firstname, lastname, address, city,
            postalCode, mobile, email, status: "paid", user: userId,  total
        });

        const payment = await InitializePayment({ email, amount: parseInt(total) * 100 });

        if (payment.data.authorization_url) {
            await newCheckout.save();

            for (let item of cartItems) {
                const fruits = await Fruit.findOne({ _id: item._id });
                const updateQuantity = await Fruit.findByIdAndUpdate(fruits._id, { quantityAvailable: fruits.quantityAvailable - parseInt(item.quantity) });
            }
            return res.status(200).json({ status: "ok", ...payment.data });
        }
        return res.status(500).json({ status: "error", message: "Error occurred with payment, try again later"});
    } catch(err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
}


export { addToCart, getCartItems, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, checkout };