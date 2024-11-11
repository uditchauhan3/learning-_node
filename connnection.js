const mongoose= require("mongoose");

async function connectMongodb() {
    return mongoose.connect("mongodb://127.0.0.1:27017/project-01")
    }
    module.exports={connectMongodb}