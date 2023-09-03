let sales = 123_432_431;
let course = "typescript";
let isPublished = true;

// any type:
let level;
level = 1;
level = "a";

// function render(document: any) {
// 	console.log(document);
// }

// Arrays:
const numbers: number[] = [1, 2];
const emptyNumber = []; // an empty array w/o a defined type is of 'any' type

// Tuples:
let user: [number, string] = [1, "Manish"];
user.push(1); // here only with ppush method... it doesn;t complain.
// now if we work with `user[0]` we will get all methods that deals with numbers
// and for 'user[1]' it will be all string methods.
// Advice: restrict your tuple's size to 2 only.

// ENUMS:
// const small = 1;
// const medium = 2;
// const large = 3;
// Using const with enums let compiler generate more optimisd code
const enum Size {
	Small = 100,
	Medium,
	Large,
}
let mySize: Size = Size.Large;
console.log(mySize);
