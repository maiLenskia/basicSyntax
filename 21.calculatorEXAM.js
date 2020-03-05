function calculator(num, operator, numTwo) {
    let sum = 0;

    switch (operator) {
        case '+':
            sum = num + numTwo;
            break;
        case "-":
                sum = num - numTwo;
            break;
        case '/':
                sum = num / numTwo;
            break;
        case '*':
                sum = num * numTwo;
            break;
    }
    console.log(sum.toFixed(2))
}
calculator(23, '/', 3)