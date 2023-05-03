const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://saptarshipatra22:hotelbooking22@hotelbookingapi.0u45a6x.mongodb.net/iNotebook?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Sucessfully");
    })
}
module.exports = connectToMongo;