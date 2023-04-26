//An enum variable is a special data type that allows you to define a set of named constants.

// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {Small=1, Medium, Large}; //here first letter will be capital after the enum
const enum Size {Small=1, Medium, Large}; //put const before the enum for getting the more optimized js code

let mySize = Size.Medium;
console.log(mySize);