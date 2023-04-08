// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const john = 'john';
const peter = 'peter';

const sayHi = (name)=>{
console.log(`Hello There ${name}`); // String interpolation better way to attach a variable to printing
//statement rather then using concatination which is another way of doing the same thing.
}
/*
When defining a name into a fuction we'll always have to call it and pass in the value to it
*/
sayHi('Ahsan');
sayHi(john);
sayHi(peter);