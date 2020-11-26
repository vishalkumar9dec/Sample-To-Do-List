const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");
const db = require(__dirname + "/db-operations.js");

// console.log(date());

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res) {


    // let day = date.getWeekday();
    let day = date.getDate();

    res.render("list", {
        listTitle: day,
        newItem: items
    })

});


app.post("/", function(req, res) {

    let item = req.body.newItem;

    const inputData = {
        name: item
    };


    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        db.insertData(inputData);
        res.redirect("/");
    }

})


app.get("/work", function(req, res) {

    res.render("list", { listTitle: "Work List", newItem: workItems })
})

app.get("/about", function(req, res) {
    res.render("about");
})



app.listen(port, function() {
    console.log("Server is up and running on port : " + port);
})