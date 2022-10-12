const expect = require('chai').expect;
const Data = require('../program.js');

beforeEach(() => {
    test = new Data();
    test.push(1);
    test.push('two');
    test.push(true);
})

afterEach(() => {
    console.log('-------- Test Complete --------')
})

before(() => {
    console.log('-------- Testing Start --------');
})

after(() => {
    console.log('-------- All Testing Complete --------');
})

it('expect failing test', () => {
    expect(test.data[0]).to.equal('Hello');
})

it('expect successful push', () => {
    expect(test.push('Hello')).to.equal('Hello was added.');
})

it('expect to call array', () => {
    expect(test.getArr()).to.deep.equal([1, 'two', true]);
})

it('expect to delete item', () => {
    expect(test.delete('two')).to.equal('two was removed.');
})

it('expect to pop item', () => {
    expect(test.pop()).to.equal('true was removed.');
})

it('expect to search', () => {
    expect(test.search(1)).to.equal(true);
})

it('expect delete error none found', () => {
    expect(test.delete('dumbledoor')).to.equal('Error: No element found for dumbledoor.');
})

it('expect search error none found', () => {
    expect(test.delete('harry')).to.equal('Error: No element found for harry.');
})


// it('expect failing test', () => {
//     test = new Data();
//     test.push(1);
//     expect(test.data[0]).to.equal('Hello');
// })

// it('expect successful push', () => {
//     test = new Data();
//     expect(test.push('Hello')).to.equal('Hello was added.');
// })

// it('expect to call array', () => {
//     test = new Data();
//     test.push(1);
//     test.push('two');
//     expect(test.getArr()).to.deep.equal([1, 'two']);
// })

// it('expect to delete item', () => {
//     test = new Data();
//     test.push(1);
//     test.push('two');
//     expect(test.delete('two')).to.equal('two was removed.');
// })

// it('expect to pop item', () => {
//     test = new Data();
//     test.push(1);
//     test.push('two');
//     expect(test.pop()).to.equal('two was removed.');
// })

// it('expect to search', () => {
//     test = new Data();
//     test.push(1);
//     expect(test.search(1)).to.equal(true);
// })

// it('expect delete error none found', () => {
//     test = new Data();
//     expect(test.delete('dumbledoor')).to.equal('Error: No element found for dumbledoor.');
// })

// it('expect search error none found', () => {
//     test = new Data();
//     expect(test.delete('harry')).to.equal('Error: No element found for harry.');
// })