// set one
var foo = 2 + 3; //5
foo = foo + 1; //6      modifying the value of the variable
foo = foo * 8; //48     modifying the value of the variable

//set two
var bar = 3 + 3; //6
bar = bar + 1;  //7   modifying the value of the variable
bar = bar * 8;  //56  modifying the value of the variable


function doSomething(){     // empty parenthatsisdoes not accept external data
                            // function body inside the curly braces
}

function doSomething(paramOne, paramTwo){     // parameter(special variable for function) in parenthatsis, empty does not accept external data
    paramOne = paramOne + 3        // function body inside the curly braces
    paramOne = paramOne + 1
    paramOne = paramOne * 8

    return paramOne * paramTwo  // must return the parameter to be viewed
}

var poo = doSomething(2, 2) // using function with the paramaters
var tar = doSomething(3, 3)

alert(poo)
alert(tar)


// annonymous function as a variable
// this code will not run unless it is put to the top of the script!
var doSomething1 = function(paramOne, paramTwo){     // parameter(special variable for function) in parenthatsis, empty does not accept external data
    paramOne = paramOne + 3        // function body inside the curly braces
    paramOne = paramOne + 1
    paramOne = paramOne * 8

    return paramOne * paramTwo  // must return the parameter to be viewed

    var poo = doSomething1(2, 2) // using function with the paramaters
    var tar = doSomething1(3, 3)
}