const expect = require('chai').expect;
const greeting = require('../program.js');

it('expect failing test', () => {
    expect(greeting(21)).to.equal('Good Yesterday');
})

it ('expect passing test', () => {
    const flip = Math.floor(Math.random() * 2 + 1);
    const getNumber = () => {
        if (flip === 1) {
            return Math.floor(Math.random() * 30 + 1)
        }
        else if (flip === 2) {
            return `${Math.floor(Math.random() * 30 + 1)}`
        }
    }
    const number = getNumber();

    if (typeof number !== 'number') {
        expect(greeting(number)).to.equal('Error: Please enter a number.');
    }
    else if (number % 3 === 0 && number % 7 !== 0) {
        expect(greeting(number)).to.equal('Good Morning');
    }
    else if (number % 3 !== 0 && number % 7 === 0) {
        expect(greeting(number)).to.equal('Good Afternoon');
    }
    else if (number % 3 === 0 && number % 7 === 0) {
        expect(greeting(number)).to.equal('Good Evening');
    }
    else if (number % 3 !== 0 && number % 7 !== 0) {
        expect(greeting(number)).to.equal(`${number}`);
    }
})