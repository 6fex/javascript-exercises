const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";
    if (number1 < 0 || number2 < 0) return "ERROR";
    let min;
    let max;
    let sum = 0;
    // alternative version of assigning to variables
    // if (number1 > number2) {
    //     max = number1;
    //     min = number2;
    // } else {
    //     max = number2;
    //     min = number1;
    // };

    (number1 > number2) ? 
        [min, max] = [number2, number1]: 
        [min, max] = [number1, number2];
    
    for (let i = min; i <= max; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
