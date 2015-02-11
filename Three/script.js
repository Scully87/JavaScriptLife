// '=' is assignment operator
// '+' operator
// use comma to define multiple variables in same statement

var sum = 4 + 5, 
    difference = 4 - 5,
    product = 4 * 5,
    quotient = 4 / 5;

// works in operation order, times, addition, subtract
var foo = 4 + 5 * (6 - 8);
    bar = foo + 1 // adding variable value and adding to it, assigning that value to a new variable

var turd = "Hello" + "World!" // concatination operator

var balls = "6" + (4 * 3) //612 concatinates next string and adds product to string

var foo = 6 + ""; // converting number to string

var bar = parseInt("34"); //converting string to number

var bar = parseInt("34sdsad54", 10); //converting string to just takes integers

var bar = parseInt("s"); //Nan

var bar = parseInt(3.14); // parse float into integer ...3

var bar = parseFloat("3.14"); // parse string to float


