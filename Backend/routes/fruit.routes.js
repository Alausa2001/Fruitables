import express from "express";
import { Fruit, Review } from "../models/fruits.js"
import logger from "../middlewares/logger.js"

const fruitRouter = express.Router();


// Not a user route
fruitRouter.post('/add_new', logger, async (req, res) => {
    const {
        name, description, price, quantityAvailable, category,
        origin, weight, minWeight, quality, check
    } = req.body;

    try {
        const fruitAvailable = await Fruit.findOne({ name, category });
        if (fruitAvailable) {
            return res.status(400).json({ status: "error", msg: "Fruit available already, you can only update now" })
        }
    } catch (err) {
        return res.status(500).json({ status: "error", msg: "internal server error"})
    }

    const newFruit = new Fruit({name, description, price, quantityAvailable, category, origin, weight, minWeight, quality, check});
    await newFruit.save();
    return res.status(201).json({ status: "ok", msg: "A new fruit has been added to stock", fruit: newFruit});
});

fruitRouter.get('/all', logger, async (req, res) => {
    const fruits = await Fruit.find()
    if (!fruits) {
        res.status(404).json({ status: "error", msg: "No fruits available"})
    }
    return res.status(200).json({ status: "ok", fruits });
})


fruitRouter.get('/:category/all', logger, async (req, res) => {
    const fruits = await Fruit.find({ category: req.params.category });
    if (!fruits) {
        res.status(404).json({ status: "error", msg: `No ${req.params.category} fruits available`})
    }
    return res.status(200).json({ status: "ok", fruits });
})


export default fruitRouter;