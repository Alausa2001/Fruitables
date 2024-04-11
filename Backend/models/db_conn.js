import mongoose from "mongoose"


const url2 = "mongodb+srv://alausaabdulqoyum28:bdbrxOUIJcLjcC9I@cluster0.xvupsd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//bdbrxOUIJcLjcC9I

async function dbConn() {
  await mongoose.connect(url2, {
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
