const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Todo = require('./models/todo.js');

const connect = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        await runQueries();

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit();
    } catch (error) //! start from here with code from 38 min in
};

connect();