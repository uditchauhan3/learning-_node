const express = require("express");
const users = require("./MOCK_DATA.json");
const userRouter = require("./routes/user")
const {connectMongodb} = require("./connnection")
const {logReqRes}= require("./middlewares")


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/project-01")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

    app.use(express.urlencoded({ extended: false }));

    app.use((logReqRes("log.txt")) 
        
    



app.listen(8000, () => console.log("Server started on http://localhost:8000"));
