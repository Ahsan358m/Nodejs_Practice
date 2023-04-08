// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname); // this prints the directory of the file 
console.log(__filename); // this prints the name of the file

setTimeout(()=>{
    console.log('Hello World');
},2000);
/* setTimeout() will perform the function and takes a callback function
   and takes input in milliseconds which means it will terminate the function after 
   the time specified in the call back function.
*/


setInterval(()=>{
    console.log('\nHello World');
},6000);
/* setInterval() will perform the function periodically and takes a callback function
   and takes input in milliseconds which means it will perform the function until it
   is stopped.
 */