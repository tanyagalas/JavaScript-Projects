function addNumbers1() {
    var x = 10;
    console.log(15 + x);
}
var y = 20;
function addNumbers2() {
    console.log(y + 100);
}

// Function with an if statement
function checkAge() {
    var age = document.getElementById("age").value;
    if (age >= 18) {
        document.getElementById("result").innerHTML = "You are old enough to vote!";
    } else {
        document.getElementById("result").innerHTML = "You are not old enough to vote!";
    }
}
// Function with an error
function getTime() {
    var time = new Date().getHours();
    var message;
    if (time < 12) {
        message = "Good morning!";
    else if (time < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }
    document.getElementById("time").innerHTML = message;
}
function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = timeString;
}
setInterval(displayTime, 1000);