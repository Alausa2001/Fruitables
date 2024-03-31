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
    const fruitOnly = [];
    const vegetables = [];

    for (const fruit of fruits) {
        if (fruit.category === 'vegetables' || fruit.category === 'vegetable') {
            vegetables.push(fruit)
        } else {
            fruitOnly.push(fruit)
        }
    }
    return res.status(200).json({ status: "ok", all_products: fruits, vegetables, fruitOnly });
})



fruitRouter.get('/:category/all', logger, async (req, res) => {
    const fruits = await Fruit.find({ category: req.params.category });
    if (!fruits[0]) {
        res.status(404).json({ status: "error", msg: `No ${req.params.category} fruits available`})
    }
    return res.status(200).json({ status: "ok", fruits });
})



fruitRouter.put("/:id/update", logger, async(req, res) => {
    const {
        name, description, price, quantityAvailable, category,
        origin, weight, minWeight, quality, check
    } = req.body;
    
    const obj = { name, description, price, quantityAvailable, category, origin, weight, minWeight, quality, check }
    
    let updatedFruit
    try {
        updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, obj)
    } catch(err) {
        return res.status(400).json({ status: "error", msg: "unable to process request, check id" });
    }

    if (updatedFruit) {
        return res.status(200).json({ status: "ok", msg: "update successful", fruit: updatedFruit });
    }
    return res.status(404).json({ status: "error", msg: "fruit not found, invalid id" });
})




fruitRouter.delete("/:id/delete", logger, async(req, res) => {
    let deleted;
    try {
        deleted = await Fruit.findByIdAndDelete(req.params.id);   
    } catch (err) {
        return res.status(400).json({ status: "error", msg: "unable to process request, check id" });
    }

    if (deleted) {
        return res.status(200).json({ status: "ok", msg: "Deleted!"});
    }
    return res.status(404).json({ status: "error", msg: "fruit not found, invalid id" });
})




// Fruit sales' reviews and ratings
fruitRouter.post("/:id/review", logger, async(req, res) => {
    const { name, email, review, rating } = req.body;

    let validFruit;
    try {
        // to confirm the id
        validFruit = await Fruit.findById(req.params.id)
        if (!validFruit) {
            return res.status(404).json({ status: "error", msg: "Fruit not found, check id"})
        }
    } catch(err) {
        // error logger to be put here
        console.log()
        return res.status(400).json({ status: "error", msg: "unable to process request, check id" });
    }

    try {
        const newReview = new Review({ name, email, review, rating, fruit: validFruit._id});
        await newReview.save();
        res.status(201).json({ status: "ok", msg: "Thank you for sending in your reviews" })
    } catch(err) {
        console.log(err) // logger to be put here
        return res.status(500).json({ status: "error", msg: "internal server error"})
    }
})



fruitRouter.get("/:name/reviews", logger, async(req, res) => {
    const reviews = await Reviews.find({ name: req.params.name});
    if (!reviews) {
        return res.status(404).json({ status: "ok", msg: "No reviews yet"})
    }
    
});


export default fruitRouter;