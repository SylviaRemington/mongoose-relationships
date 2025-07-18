// Mongoose Relationships Lecture with Tristan Hall
// Not using express in this - Just doing this as pure mongoose queries / We can always put it into an express app later 


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

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: 'learn React',
    isComplete: false,
  };
  const todo = await Todo.create(todoData);
  console.log('New todo:', todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log('All todos:', todos);
};

//creating a function that will create a subtask
const createSubtask = async () => {
    //this is an actual id we have
    // This is the id we're looking for and creating a variable for it to make it easier to add to code without an error with the long number.
    const todoId = '68687d616cc4349f107ee166';

    //then going to look up id & fetch the parent document 
    // Need to go to the database and get the document we want to create the subtask for.
    const todo = await Todo.findById(todoId);
}

// Need subtaskData to push in
const subtaskData = {
  text: "Learn how props work",
  isComplete: false,
};

// Then need to push subtaskData to DB
todo.subtasks.push(subtaskData);

// Then save it.
todo.save();

// ! Stopping here with code along at 57 minutes 19 seconds in to the lecture - It's going along
// ! really fast & I want to be present with what he's saying.


/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
//   await createTodo();
await findTodos();
};