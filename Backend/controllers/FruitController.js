import express from "express";
import { Fruit, Review } from "../models/fruits.js"
import logger from "../middlewares/logger.js"




const addFruit = async (req, res) => {
    const {
        name, description, price, quantityAvailable, category, imageUrl,
        origin, weight, minWeight, quality, check = "Healthy"
    } = req.body;

    try {
        const fruitAvailable = await Fruit.findOne({ name, category });
        
        if (fruitAvailable) {
            return res.status(400).json({ status: "error", msg: "Fruit available already, you can only update now" })
        }

        const newFruit = new Fruit({name, description, price, quantityAvailable, category, origin, imageUrl, weight, minWeight, quality, check});
        await newFruit.save();
        return res.status(201).json({ status: "ok", msg: "A new fruit has been added to stock", fruit: newFruit});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"})
    }
}


const getAllFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();
        if (!fruits) {
            return res.status(404).json({ status: "error", msg: "No fruits available"})
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
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"});
    }
}


const getFruitsByCategory = async (req, res) => {
    try {
        const fruits = await Fruit.find({ category: req.params.category });
        if (!fruits[0]) {
            return res.status(404).json({ status: "error", msg: `No ${req.params.category} fruits available`})
        }
        return res.status(200).json({ status: "ok", fruits });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"})
    }
}


const getOneFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findOne({ _id: req.params.id });
        if (!fruit) {
            return res.status(404).json({ status: "error", msg: `fruit not available`})   
        }
        return res.status(200).json({ status:"ok", fruit })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "error", msg: "internal server error"})
    }
}


const updateFruit = async (req, res) => {
    const {
        name, description, price, quantityAvailable, category,
        origin, weight, minWeight, quality, check, imageUrl
    } = req.body;
    
    const obj = { name, description, price, quantityAvailable, imageUrl, category, origin, weight, minWeight, quality, check }
    
    let updatedFruit
    try {
        updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, obj);

        if (updatedFruit) {
            return res.status(200).json({ status: "ok", msg: "update successful" });
        }
        return res.status(404).json({ status: "error", msg: "fruit not found, invalid id" });
    } catch(err) {
        return res.status(400).json({ status: "error", msg: "unable to process request, check id" });
    }
}


const deleteFruit = async (req, res) => {
    let deleted;
    try {
        deleted = await Fruit.findByIdAndDelete(req.params.id);  
        if (deleted) {
            return res.status(200).json({ status: "ok", msg: "Deleted!"});
        }
        return res.status(404).json({ status: "error", msg: "fruit not found, invalid id" }); 
    } catch (err) {
        return res.status(400).json({ status: "error", msg: "unable to process request, check id" });
    }
}




export { addFruit, getAllFruits, getFruitsByCategory, getOneFruit, updateFruit, deleteFruit };