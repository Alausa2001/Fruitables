import { Schema } from 'mongoose';
import mongoose from "./db_conn.js"


const fruitSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantityAvailable: Number,
    imageUrl: String,
    category: String,
    origin: String,
    weight: Number,
    minWeight: Number,
    quality: String,
    check: String
}, { timestamps: true });

const Fruit = mongoose.model("Fruit", fruitSchema);


const reviewSchema = new Schema({
    name: String,
    email: String,
    review: String,
    rating: Number,
    fruit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Fruit
    }
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

export { Fruit, Review };