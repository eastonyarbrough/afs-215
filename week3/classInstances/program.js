const SunDial = require('./sunDial.js');

const dial1 = new SunDial(12);
const dial2 = new SunDial(14);
const dial3 = new SunDial(21);
const dial4 = new SunDial(25);
const dial5 = new SunDial('25');
const dial6 = new SunDial(true);

console.log(dial1.timeOfDay());
console.log(dial2.timeOfDay());
console.log(dial3.timeOfDay());
console.log(dial4.timeOfDay());
console.log(dial5.timeOfDay());
console.log(dial6.timeOfDay());