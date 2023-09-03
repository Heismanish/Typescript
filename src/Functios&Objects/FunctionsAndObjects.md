# TypeScript Functions and Objects:

## Functions

```typescript
function sum(a: number, b: string) {
	a++;
	b = "YUM";
	return a + b;
}
console.log(sum(1, "Piece")); // Output: 2YUM
```

### More Example:

This function converts weight from kilograms to pounds. It handles both numeric and string inputs for Weight.

```typescript
function KgToLbs(Weight: number | string): number {
	if (typeof Weight === "number") {
		return Weight * 2.2;
	} else {
		return parseInt(Weight) * 1.5;
	}
}
console.log(KgToLbs(300)); // Output: 660
```

## Objects 🧍‍♂️

**Using Type Aliases**:
We define an Employee type alias with properties id, name, and a retire method that takes a Date parameter.

```typescript
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee: Employee = {
	id: 1,
	name: "Mosh",
	retire: (date: Date) => {
		console.log(date);
	},
};
```

## Working with nulls and undefined

The Names function takes a name parameter that can be a string, null, or undefined. It logs the name if it exists; otherwise, it says "Hola!".

```typescript
function Names(name: string | null | undefined) {
	if (name) {
		console.log(name);
	} else {
		console.log("Hola!");
	}
}
Names(null); // Output: Hola!
```

## Optional Chaining

### Function `getCustomer`

```typescript
type Customer = {
	birthday: number;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
```

### Optional Property Access Operator

```typescript
console.log(customer?.birthday);
```

### Optional Element Access Operator

```typescript
customer?.[0];
```

### Optional Call

```typescript
const log: any = null;
log?.("a");
```
