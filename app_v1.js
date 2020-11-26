const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.set('view engine', 'ejs');


app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    // console.log(day);
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    //     // res.send("It is Weekend");
    //     // res.sendFile(__dirname + "weekend.html");
    //     // res.render("list", { kindOfDay: day });
    // } else {
    //     day = "Weekday";
    //     // res.send("It is not Weekend Today day of week is : " + today.getDay());
    //     // res.sendFile(__dirname + "/weekday.html");
    //     // res.render("list", { kindOfDay: day });
    // }
    switch (currentDay) {
        case 0:
            day = "Sunday"

            break;
        case 1:
            day = "Monday"

            break;
        case 2:
            day = "Tueday"

            break;
        case 3:
            day = "Wednesday"

            break;
        case 4:
            day = "Thursday"

            break;
        case 5:
            day = "Friday"

            break;
        case 6:
            day = "Saturday"

            break;
        default:
            console.log("Error: Current day is equal to: " + currentDay);
            break;
    }

    res.render("list", { kindOfDay: day });
});



app.listen(port, function() {
    console.log("Server is up and running on port : " + port);
})