const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const mongoURI = process.env.URI;
const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Sucessfully");
    })
}
module.exports = connectToMongo;