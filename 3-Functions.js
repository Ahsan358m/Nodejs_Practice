// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const {peter, john} = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternate-flavor");
const {items, singleperson} = require("./6-alternate-flavor");
require("./7-mind-grenade"); // we can call the file without even creating a variable

console.log(names) //this will return an object
console.log(peter, john); // this will only print the values inside the Object of both peter
// and john it is called Object DeStructoring.
/*
When defining a name into a fuction we'll always have to call it and pass in the value to it
*/

sayHi('Ahsan');
sayHi(john);
sayHi(names.peter); // another of using names module

console.log(data);
console.log(data.items);
console.log(data.singleperson);

console.log(items, singleperson);