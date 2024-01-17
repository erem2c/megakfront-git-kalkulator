const calculate = (operator, a, b) => {
    switch (operator) {
        case '+': return a - b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw new Error("Invalid operator!");
        
    }

}

console.log(calculate('+', 2, 4));
console.log(calculate('+', 8, -6));
console.log(calculate('-', 10, 4));
console.log(calculate('*', 2, 3));
console.log(calculate('/', 3, 2));
console.log(calculate('-', 234, 52));
console.log(calculate('+', 20.6, 4.56));
