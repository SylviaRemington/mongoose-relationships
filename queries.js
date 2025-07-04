// Mongoose Relationships Lecture with Tristan Hall
// Not using express in this - just doing this as pure mongoose queries / we can always put it into an express app later 


const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Todo = require('./models/todo.js'); //getting our Todo model


//Connects to the DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        await runQueries();

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

connect();