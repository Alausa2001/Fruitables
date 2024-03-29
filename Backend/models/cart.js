import { Schema } from 'mongoose';
import { Fruit } from './fruits';
import mongoose from "./db_conn";
import { User } from './user';


const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
    status: String,
});

const Cart = mongoose.model("Cart", cartSchema);


const cartItemSchema = new Schema({
    cart: { type: mongoose.Schema.Types.ObjectId, ref: Cart },
    fruit: { type: mongoose.Schema.Types.ObjectId, ref: Fruit },
    quantity: Number
})

const CartItem = mongoose.model("CartItem", cartItemSchema)

export { Cart, CartItem};
