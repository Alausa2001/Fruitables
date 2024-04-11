import mongoose from "mongoose"


const url3 = "mongodb+srv://versity:BcA0o5vpfKRilkIB@cluster0.cxu2wmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function dbConn() {
  await mongoose.connect(url3, {
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
