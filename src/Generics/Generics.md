# Generics

## Introduction

Generics in TypeScript allow you to write flexible and reusable code by working with various data types within a single function or class. They provide a way to create functions and classes that can work with different types of data while maintaining type safety.

## Use Case

Consider the following code example: 👇

```typescript
function arrayFunction<T>(arr: T[]): T {
	return arr[0];
}
```

👉 In this example, the arrayFunction is a generic function that can accept an array of any type, whether it's an array of strings, numbers, or booleans. The use of the <T> syntax denotes that T is a type parameter that can represent any data type.

**Generics are particularly useful when you want to write functions or classes that are flexible and adaptable to various data types. By using generics, you can create more versatile and type-safe code, reducing the need for code duplication and improving code quality.**

## For Working with different types:

```typescript
function swapDiff<T, U>(a: T, b: U): [U, T] {
	return [b, a];
}
```
