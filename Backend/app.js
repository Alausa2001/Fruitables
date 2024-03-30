import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";


const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use('/api/v1', userRouter)



app.get('/api/v1', (req, res) => {
    res.status(200).json("Welcome to Fruitables");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
