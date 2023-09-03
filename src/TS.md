# TS - My typescript learnings :point_down:

## Table of Contents 🗒️

1. [Getting Started](#getting-started)
2. [Basic Types](#basic-types)
3. [Interfaces](#interfaces)
4. [Classes](#classes)
5. [Functions](#functions)
6. [Generics](#generics)
7. [Enums](#enums)
8. [Type Inference](#type-inference)
9. [Type Compatibility](#type-compatibility)
10. [Advanced Types](#advanced-types)

## Getting Started 🏃

To start using TypeScript, you'll need to have Node.js installed on your computer. You can check if you have TypeScript installed by running:

```bash
tsc --version
```

If it's not installed, you can install it globally using npm:

```bash
`npm install -g typescript`
```

#### Create a TypeScript file (e.g., `index.ts`) and write your code there. You can then compile it to JavaScript using the `tsc` command:

```bash

`tsc index.ts`
```

This will generate a `index.js` file that you can run using Node.js.

## Basic Types 🗯️

TypeScript provides several basic data types, including:

- `number`: Represents both integer and floating-point numbers.
- `string`: Represents textual data.
- `boolean`: Represents a binary value (true or false).
- `null` and `undefined`: Represents missing or uninitialized values.
- `any`: Represents a dynamic type with no type checking.

**Example:**

```typescript
let num: number = 42;
let greeting: string = "Hello, TypeScript!";
let isReady: boolean = true;
let notDefined: undefined = undefined;
let noValue: null = null;
let dynamic: any = "I can be anything!";
```

## Interfaces

Interfaces allow us to define the shape of objects and ensure that objects of a specific type conform to a certain structure.

**Example:**

```typescript
interface Person {
	name: string;
	age: number;
}

const person: Person = {
	name: "Alice",
	age: 30,
};
```

ℹ️ For more: [Interfaces](./src/Interfaces/Interfaces.md)

## Classes

Classes in TypeScript provide a way to create reusable, object-oriented code. They can have properties, methods, and constructors.

**Example:**

```typescript
class Dog {
	constructor(public name: string) {}

	bark(): void {
		console.log(`${this.name} says woof!`);
	}
}

const myDog = new Dog("Buddy");
myDog.bark();
```

## Functions:

Functions in TypeScript can have explicit types for their parameters and return values.

Example:

```typescript
function add(a: number, b: number): number {
	return a + b;
}

const result = add(5, 7);
console.log(result); // Output: 12`
```

ℹ️ For more: [Functions](./src/FunctionAndObjects.md)

## Generics

Generics allow us to write reusable, type-safe code that works with different data types.

**Explaination :**

This code defines a TypeScript function called identity. The function takes a single argument arg of type T and returns a value of the same type T. The angle brackets <T> indicate that T is a type parameter, which means it can represent any data type.

**Example :**

```typescript
function identity<T>(arg: T): T {
	return arg;
}

const numIdentity = identity(42);
const strIdentity = identity("Hello, Generics!");
```

## Enums

Enums provide a way to define a set of named constants. They are often used to represent a fixed set of values.

**Example:**

```typescript
enum Color {
	Red,
	Green,
	Blue,
}

const selectedColor: Color = Color.Red;
```

ℹ️ For more: [ENUMS](./src/Enums.md)

## Type Inference

TypeScript can often infer the types of variables and function return values based on their usage, reducing the need for explicit type annotations.

Example:

```typescript
let x = 10; // TypeScript infers x as a number`
```

## Type Compatibility

TypeScript uses structural typing to check if types are compatible, allowing for flexibility when working with different object shapes.

Example:

```typescript
interface Point {
	x: number;
	y: number;
}

const point: Point = { x: 1, y: 2 };
const point2: { x: number } = point; // Compatible because it has at least the same properties.`
```
