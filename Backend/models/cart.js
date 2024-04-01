import { Schema } from 'mongoose';
import { Fruit } from './fruits.js';
import mongoose from "./db_conn.js";
import User from './user.js';


const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
});

const Cart = mongoose.model("Cart", cartSchema);


const cartItemSchema = new Schema({
    cart: { type: mongoose.Schema.Types.ObjectId, ref: Cart },
    fruit: { type: mongoose.Schema.Types.ObjectId, ref: Fruit },
    quantity: Number,
    status: { type: String, default: "not paid"}
}, { timestamps: true })

const CartItem = mongoose.model("CartItem", cartItemSchema)

export { Cart, CartItem };