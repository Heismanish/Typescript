# TypeScript Types and Interfaces

In TypeScript, both types and interfaces serve as ways to define the structure of objects or classes, but they have some key differences. This README will explore TypeScript types, interfaces, and how to use them effectively.

## Table of Contents

1. [Types vs. Interfaces](#types-vs-interfaces)
2. [Using Interfaces in Types](#using-interfaces-in-types)
3. [Type Unions and Intersections](#type-unions-and-intersections)
4. [Working with Custom Types](#working-with-custom-types)

## Types vs. Interfaces

Types and interfaces in TypeScript have similarities, but they also have distinct features. One primary difference is that interfaces can be implemented by classes, whereas types cannot.

Here's an example of a `Person` type:

```typescript
type Person = {
	name: string;
	age: number;
	greet(): string;
};
```

Here's a README.md file generated from the provided content, including explanations and code examples:

markdown

# TypeScript Types and Interfaces

In TypeScript, both types and interfaces serve as ways to define the structure of objects or classes, but they have some key differences. This README will explore TypeScript types, interfaces, and how to use them effectively.

## Table of Contents

1. [Types vs. Interfaces](#types-vs-interfaces)
2. [Using Interfaces in Types](#using-interfaces-in-types)
3. [Type Unions and Intersections](#type-unions-and-intersections)
4. [Working with Custom Types](#working-with-custom-types)

## Types vs. Interfaces

Types and interfaces in TypeScript have similarities, but they also have distinct features. One primary difference is that interfaces can be implemented by classes, whereas types cannot.

Here's an example of a `Person` type:

```typescript
type Person = {
	name: string;
	age: number;
	greet(): string;
};
```

## Using Interfaces in Types

You can use interfaces within types to create more complex type definitions. In this example, we have interfaces for different shapes (CircleInterface, Square, and Rectangle) and a type Shape that can be any of these shapes:

```typescript
interface CircleInterface {
	radius: number;
	borderWidth?: number;
}

interface Square {
	side: number;
}

interface Rectangle {
	length: number;
	width: number;
}

type Shape = Rectangle | Square | CircleInterface;

function area(shape: Shape): string {
	if (shape) return `Area`;
	return "no area found";
}
```

```typescript
type Circle = {
	radius: number;
	circumference(): number;
};

function calculate(parameters: Circle) {
	return `circumference: ${parameters.circumference()}`;
}

console.log(
	calculate({
		radius: 3,
		circumference() {
			return this.radius * 3.14 * 2;
		},
	})
);
```
