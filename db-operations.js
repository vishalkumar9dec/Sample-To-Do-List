const mongoose = require("mongoose");

// This will connect to mongoDB and will create a Database taskListsDB
mongoose.connect("mongodb://localhost:27017/taskListsDB", { useUnifiedTopology: true, useNewUrlParser: true });


// Create Schema
const taskSchema = new mongoose.Schema({
    name: String
});


//Create a model now

const Task = mongoose.model("Task", taskSchema);


//Create Data now
const task = new Task({
    name: "Learn Flutter"
})


exports.insertData = function(inputData) {

    Task.insertMany(inputData, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Data Inserted successfully !");
        }
    });
};