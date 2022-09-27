const options = ['+', '-', 'x', '/'];

const calculator = (num1, op, num2) => {
    if (typeof op !== 'string' || !options.includes(op.toLowerCase())) {
        return 'Please enter valid operation ("+", "-", "x", "/").'
    }
    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter valid numbers for calculation.'
    }
    else if (op === '+') {
        return num1 + num2;
    }
    else if (op === '-') {
        return num1 - num2;
    }
    else if (op.toLowerCase() === 'x') {
        return num1 * num2;
    }
    else if (op === '/') {
        return num1 / num2;
    }
}

module.exports = calculator;