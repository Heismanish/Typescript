// Interfaces:
// - Let us define types of our own.
// - They can be implemented by classes just as we do in Java.

interface PersonInterface {
	name: string;
	age: number;
}

function greet(person: PersonInterface): string {
	return `Hello ${person.name} we welcome you here!!`;
}

function agePrint(person: PersonInterface): string {
	return `You are ${person.age} years old`;
}

// console.log(agePrint({ name: "Manish", age: 21 }));

// Using interface in classes(implementing interface in classes)
interface PersonInterface2 {
	name: string;
	age: number;
	greet(): string;
	hobby(): string;
}

class PersonClass implements PersonInterface2 {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet() {
		return `Welcome ${this.name}`;
	}

	hobby() {
		return `Oh we have none`;
	}
}
const personObject = new PersonClass("Manish", 21);
console.log(personObject);

// Using interfaces in interfaces:
interface Gender {
	gender: string;
	orientation: string;
	pronouns: string;
}

interface Human {
	name: string;
	age: number;
	gender: Gender;
}

function greetings(human: Human) {
	return `We welcome you ${human.name}`;
}

greetings({
	name: "Manish",
	age: 21,
	gender: { gender: "male", orientation: "straight", pronouns: "he/him" },
});

// Interfaces can extend interfaces:
interface Gender2 {
	gender: string;
	orientation: string;
	pronouns: string;
}

interface Human2 extends Gender2 {
	name: string;
	age: number;
}

interface SocialAnimal extends Human2 {
	name: string;
	furType: string;
}

function animal(socialAnimal: SocialAnimal) {
	return `Name ${socialAnimal.name} has ${socialAnimal.furType} skin and is ${socialAnimal.age} years old `;
}

console.log(
	animal({
		name: "Bear",
		furType: "Hairy",
		age: 21,
		gender: "Male",
		orientation: "straight",
		pronouns: "he/him",
	})
);

////////////////////////////////////////////////////////////////////////
