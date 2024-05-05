import { Fruit, Review } from "../models/fruits.js"


const addReview = async (req, res) => {
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
        console.error(err)
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
}

const getReviews = async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);
        const reviews = await Review.find({ fruit: req.params.id });
        if (!reviews) {
            return res.status(404).json({ status: "ok", msg: "No reviews yet"})
        }
        res.status(200).json({ status: "ok", msg: ".", reviews }) 
    } catch (error) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "Internal server error, can't retrieve reviews"})   
    }
}


export { addReview, getReviews };