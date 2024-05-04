import mongoose from "mongoose"



async function dbConn() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Fruitables", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

dbConn().then(
  console.log("Database Connected")
  ).catch(
    err => console.log(` Error connecting to database: ${err}`)
    );


export default mongoose
