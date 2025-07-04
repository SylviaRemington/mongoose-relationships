// Creating a todo - This will house our model.
// Then later can create multiple sub-tasks
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
    text: String,
    isComplete: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

//what does module exports... use to save data into database / use as Todo.find
//the communication bit with mongoDB

