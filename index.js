// console.log('Hello From Node js') 

// const person = require('./person')

// console.log(person.name)

// const {generateRandomNo, celciusToFahrenheight }= require('./utlils')

// console.log(`Random Number: ${generateRandomNo()}`);
// console.log(`celcius To Fahrenheight: ${celciusToFahrenheight(0)}`)

import getPosts , { getPostsLength } from "./postControler.js";

console.log(getPosts());

console.log(`Post Length: ${getPostsLength()}`)
