const expect = require('chai').expect;
const List = require('../todo.js');

beforeEach(() => {
    test = new List();
    test.push('Type the code, Do the tests, Get the grade, Graduate');
})

afterEach(() => {
    console.log('---------- Test Complete ----------')
})

before(() => {
    console.log('---------- Testing Start ----------')
})

after(() => {
    console.log('------ All Testing Complete -------')
})

it('expect failing test', () => {
    expect(test.list[0].task).to.equal("The boy who lived");
})

it('expect to call the list', () => {
    expect(test.getList()).to.equal('Todo List successfully returned');
})

it('expect to push single task', () => {
    expect(test.push('Wash the car')).to.equal('Item(s) added to Todo List');
})

it('expect to push multiple tasks', () => {
    expect(test.push('Wash the car, Sweep the floor')).to.equal('Item(s) added to Todo List');
})

it('expect to remove first task', () => {
    expect(test.shift()).to.equal("'Type the code' was removed");
})

it('expect to remove last task', () => {
    expect(test.pop()).to.equal("'Graduate' was removed");
})

it('expect to remove specific task', () => {
    expect(test.delete('Get the grade')).to.equal("'Get the grade' was removed");
})

it('expect to edit task priority', () => {
    expect(test.editList('Graduate', 1)).to.equal("'Graduate' has been set to priority 1");
})

it('expect to edit task completeness', () => {
    expect(test.editList('Get the grade', true)).to.equal("'Get the grade' completion was set to true");
})
