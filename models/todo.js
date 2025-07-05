// Creating a todo - This will house our model.
// Then later can create multiple sub-tasks
const mongoose = require("mongoose");

// subtask - this is a sub-document Schema
const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new mongoose.Schema ({
    text: String,
    isComplete: Boolean,
    subtasks: [subtaskSchema], // ! This is where I stopped from the recording at 53:51
});

const Todo = mongoose.model('Todo', todoSchema);

//What module exports does...
//This is the model that you would use to do Todo.create or Todo.find or Todo.findById, etc.
//This is the bit that does the communication with MongoDB below:
module.exports = Todo;


