let first;
let second;
let third;

function firstChangeValue(firstNumber) {
  // Write your code
  first = Number(firstNumber);
}

function secondChangeValue(secondNumber) {
  // Write your code
  second = Number(secondNumber);
}

function calculateSum() {
  // Write your code
  if (first > second) {
    document.getElementById("result").innerHTML = first;
  } else {
    document.getElementById("result").innerHTML = second;
  }
}