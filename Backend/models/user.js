import { Schema } from 'mongoose';
import mongoose from "./db_conn.js"


const userSchema = new Schema({
    surname: String,
    firstname: String,
    email: {
        type: String,
        unique: true,

    },
    phoneNo: String,
    password: String,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
