import { Schema } from 'mongoose';
import mongoose from "./db_conn.js"
import User from './user.js';
import { Cart } from './cart.js';


const checkoutSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
    firstname: String,
    lastname: String,
    address: String,
    city: String,
    postalCode: String,
    mobile: String,
    email: String,
    status: String,
    total: Number,
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

export default Checkout