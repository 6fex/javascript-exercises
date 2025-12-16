const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    const fib = [0, 1];
    
    for (let i = 0; i < number - 1; i++) {
        const nextInSequence = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextInSequence);
    }

    return fib[number];
};
console.log(fibonacci("21"))
// Do not edit below this line
module.exports = fibonacci;
