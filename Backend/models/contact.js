import mongoose from "./db_conn.js"
import { Schema } from 'mongoose';



const contactUsSchema = new Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });

const ContactUs = mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;