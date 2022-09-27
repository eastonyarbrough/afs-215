const expect = require('chai').expect;
const calculator = require('../calculator.js');

it('expect failing test', () => {
    expect(calculator(10, '-', 5)).to.equal(2);
})

it('expect passing test', () => {
    expect(calculator(10, '/', 5)).to.equal(2);
})

it('expect invalid operation', () => {
    expect(calculator(10, 'plus', 5)).to.equal('Please enter valid operation (+, -, x, /).');
})

it('expect invalid numbers', () => {
    expect(calculator('ten', '+', 'five')).to.equal('Please enter valid numbers for calculation.');
})