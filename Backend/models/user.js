import { Schema } from 'mongoose';
import uuidv4 from "uuid/v4"
import mongoose from "./db_conn"


const userSchema = new Schema({
    userId: { type: String, default: uuidv4() },
    surname: String,
    firstName: String,
    email: {
        type: String,
        unique: true,

    },
    phoneNo: String,
    password: String,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
