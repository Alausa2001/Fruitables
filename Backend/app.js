import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";
import fruitRouter from "./routes/fruit.routes.js";

const app = express();
const port = 3000;



app.use(cors({origin: "*",credentials: true, // Important for cookies, authorization headers with HTTPS
methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], allowedHeaders: ["Origin",
"Content-Type", "Accept", "Authorization", "X-Request-With"]}));


app.use(bodyParser.json());
app.use('/api/v1', userRouter)
app.use('/api/v1/fruits', fruitRouter)


app.get('/api/v1', (req, res) => {
    res.status(200).json("Welcome to Fruitables");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
