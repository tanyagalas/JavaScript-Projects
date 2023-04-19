// This function adds 2 and 2, and displays the result
function addition_Function() {
  var addition = 2 + 2;
  document.getElementById("addition_result").innerHTML = "2+2=" + addition;
}

// This function subtracts 2 from 5
function subtraction_Function() {
  var Subtraction = 5 - 2;
  document.getElementById("subtraction_result").innerHTML = "5 - 2 = " + Subtraction;
}  

// This function multiplies
function multiplication() {
  var simple_Math = 3 * 8;
  document.getElementById("multiplication_result").innerHTML = "3 x 8 " + simple_Math;
}

// This function divides
function division() {
  var simple_Math = 36 / 6;
  document.getElementById("division_result").innerHTML = "36 / 6 = " + simple_Math;
}

function more_Math() {
  var simple_Math = (1 + 1) * 4 / 2 - 5;
  document.getElementById("more_math_result").innerHTML = "1 plus 1, multiplied by 4, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 25 % 6;
  document.getElementById("modulus_result").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
  var x = 3;
  document.getElementById("negation_result").innerHTML = -x;
}

// This function generates a random integer between 1 and 100
function getRndInteger() {
  var random_number = Math.floor(Math.random() * 100) + 1;
  document.getElementById("random_number_result").innerHTML = "Random number between 1 and 100: " + random_number;
}