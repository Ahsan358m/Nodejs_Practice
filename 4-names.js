// Local
const secret = "Super Secret";
//Sharing
const john = 'john';
const peter = 'peter';


//console.log(module); // prints the module object for this file.

module.exports = {john, peter};
//module.exports will only export peter and john as we have only defined these two and not secret

//console.log(module); // will return the object for this file and logs the .exports method for module
// and the values defined within it.

// Commenting out console log for module as it will only print into the console where ever
// module will be called

/*
Matlab khne ka ha humney Functions wali file ma name se variable banaya ha yeh names wali file 
k ander sarey code ko print krwadey ga until and unless it is a function
 */