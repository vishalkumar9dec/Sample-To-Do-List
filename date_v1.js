// module.exports = "Hello World";

// module.exports = getDate;

module.exports.getDate = getDate;


function getDate() {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}


module.exports.getWeekday = getWeekday;

function getWeekday() {
    let today = new Date();

    let options = {
        weekday: "long",

    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}