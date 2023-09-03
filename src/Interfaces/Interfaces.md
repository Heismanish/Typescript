# TypeScript Interfaces

Interfaces in TypeScript allow us to define custom types with specific structures. They are useful for defining contracts that classes or objects must adhere to. In this README, we will explore the concepts of interfaces and how to use them in TypeScript.

## Table of Contents

1. [Introduction](#introduction)
2. [Using Interfaces](#using-interfaces)
3. [Implementing Interfaces in Classes](#implementing-interfaces-in-classes)
4. [Using Interfaces in Interfaces](#using-interfaces-in-interfaces)
5. [Extending Interfaces](#extending-interfaces)

## Introduction

Interfaces provide a way to define the structure of objects or classes in TypeScript. They allow us to specify what properties and methods an object or class should have. Interfaces play a crucial role in maintaining code consistency and ensuring that objects adhere to a certain contract.

## Using Interfaces

We can define custom types using interfaces. Here's an example of a `PersonInterface`:

```typescript
interface PersonInterface {
	name: string;
	age: number;
}
```

We can then use this interface to define functions that operate on objects that adhere to this structure:

```typescript
function greet(person: PersonInterface): string {
	return `Hello ${person.name}, we welcome you here!!`;
}

function agePrint(person: PersonInterface): string {
	return `You are ${person.age} years old`;
}
```

## Implementing Interfaces in Classes

Interfaces can also be implemented by classes, similar to how we do it in other object-oriented languages like Java. Here's an example:

```typescript
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
		return `Oh, we have none`;
	}
}
```

## Using Interfaces in Interfaces

Interfaces can also be used within other interfaces to create more complex structures. For example, here's a `Gender` interface used within a `Human` interface:

```typescript
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
```

## Extending Interfaces

Interfaces can extend other interfaces, allowing us to build on top of existing contracts. Here's an example of extending interfaces:

```typescript
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
```
