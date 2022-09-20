const User = require('./user.js');

const me = new User(15, 46);
const you = new User(2, 5, 'John', 28);

console.log(me.greeting());
console.log(me.add());
console.log(me.sub());
console.log(me.mult());
console.log(me.div());
console.log(me.add_str());

console.log(you.greeting());
console.log(you.add());
console.log(you.sub());
console.log(you.mult());
console.log(you.div());
console.log(you.add_str());