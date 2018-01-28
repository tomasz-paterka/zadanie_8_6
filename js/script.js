var a = prompt("Enter 'a' value"),
    b = prompt("Enter 'b' value"),
    value = (a * a) - (2 * a * b) + (b * b);
console.log("Result is: " + value);
if (value < 0) {
console.log("Result is negative");
} else if (value > 0) {
console.log("Result is positive");
} else if (value === 0) {
console.log("Result is zero");
} 