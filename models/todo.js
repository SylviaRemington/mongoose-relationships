// Creating a todo - This will house our model.
// Then later can create multiple sub-tasks
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
    text: String,
    isComplete: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

//What module exports does...
//This is the model that you would use to do Todo.create or Todo.find, etc.
//This is the bit that does the communication with MongoDB below:
module.exports = Todo;


