import express from "express";
import logger from "../middlewares/logger.js"
import { addFruit, getAllFruits, getFruitsByCategory } from "../controllers/FruitController.js";
import { getOneFruit, updateFruit, deleteFruit } from "../controllers/FruitController.js";
import { addReview, getReviews } from "../controllers/ReviewController.js";

const fruitRouter = express.Router();



// Not a user route
fruitRouter.post('/add_new', logger, addFruit);
fruitRouter.get('/all', logger, getAllFruits)
fruitRouter.get('/:category/all', logger, getFruitsByCategory);
fruitRouter.get("/:id", logger, getOneFruit);
fruitRouter.put("/:id/update", logger, updateFruit);
fruitRouter.delete("/:id/delete", logger, deleteFruit);

// Fruit sales' reviews and ratings
fruitRouter.post("/:id/review", logger, addReview)
fruitRouter.get("/:id/reviews", logger, getReviews);



export default fruitRouter;