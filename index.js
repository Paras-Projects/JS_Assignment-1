// Table using For Loop
let value = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${value} x ${i} = ${value * i}`);
}

// Prime numbers
for (let num = 2; num <= 20; num++) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            break;
        }
    }
    if (i === num) {
        console.log(`Prime: ${num}`);
    }
}

// Odd and Even numbers
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(`Even: ${num}`);
    } else {
        console.log(`Odd: ${num}`);
    }
}

// Decision based on value 
let value = 7;
if (value < 5) {
    console.log("Value is less than 5.");
} else if (value >= 5 && value <= 10) {
    console.log("Value is between 5 and 10.");
} else {
    console.log("Value is greater than 10.");
}

// Refactor using functions:

function decideLogic(value) {
    if (value < 5) {
        return "Value is less than 5.";
    } else if (value >= 5 && value <= 10) {
        return "Value is between 5 and 10.";
    } else {
        return "Value is greater than 10.";
    }
}

// Example call
let result = decideLogic(7);
console.log(result);

// Call functions in three different ways:

// a.Arrow function (lambda):

const decideLogicArrow = (value) => (value < 5 ? "Value is less than 5." : value <= 10 ? "Value is between 5 and 10." : "Value is greater than 10.");

// Example call
let resultArrow = decideLogicArrow(7);
console.log(resultArrow);

// b.Call by value:

function decideLogicValue(value) {
    value *= 2;
    return decideLogic(value);
}

// Example call
let resultValue = decideLogicValue(7);
console.log(resultValue);

// c.Call by reference:

function decideLogicReference(value) {
    value[0] += 3;
    return decideLogic(value[0]);
}

// Example call
let resultReference = decideLogicReference([7]);
console.log(resultReference);