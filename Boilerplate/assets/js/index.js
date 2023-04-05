import { greetUser, goodbyeUser } from "./function.js";
// import User, { greetUser, goodbyeUser, days } from "./function.js";

greetUser();


import { greetUser1 } from "./function.js";
     let user = 'Simeon';
greetUser1(user);

goodbyeUser(user);

console.log(days)

console.log(User)

//  import User, * as greet from './function.js'

// console.log(greet)
// let user1 = new User('Simo');
// greet.greetUser(user1.name);
// greet.goodbyeUser(user1.name);
// console.log(greet.days)


import User, { greetUser as hello, goodbyeUser as bye, days } from './function.js'

let user2 = new User('Simo');
hello(user2.name);
bye(user2.name);
console.log(days)

