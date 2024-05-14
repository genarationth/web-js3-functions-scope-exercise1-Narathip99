// Exercise 1.1
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return "Division by zero is undefined";
  }
  return a / b;
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));
console.log(divide(5, 0));


// Exercise 1.2
function info(firstName, location, hobby) {
  console.log("\n Hi, my name is " + firstName + ". I live in " + location + " and enjoy " + hobby + ".");
}

info("Naay", "Paradise", "playing game");