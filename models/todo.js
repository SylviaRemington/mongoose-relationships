// Creating a todo - This will house our model.
// Then later can create multiple sub-tasks
const mongoose = require("mongoose");

// subtask - this is a sub-document Schema - put it above the todoSchema
// Then after we place this subtaask Schema here, we can embed it in the todoSchema
const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new mongoose.Schema ({
    text: String,
    isComplete: Boolean,
    //below is where we embed the subtask in the todoSchema
    //note: you can't have a subtask array that's empty
    subtasks: [subtaskSchema], // This is embedded.
});

const Todo = mongoose.model('Todo', todoSchema);

//What module exports does...
//This is the model that you would use to do Todo.create or Todo.find or Todo.findById, etc.
//This is the bit that does the communication with MongoDB below:
module.exports = Todo;


