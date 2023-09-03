# Enumerations (Enums) in TypeScript

<img src="../../assets/Screenshot from 2023-09-03 18-55-32.png"/>

Enums in TypeScript allow you to define a set of named constants. These constants are typically used to represent a fixed set of values, and behind the scenes, they are stored as numeric values. In your example, you've defined two enums, `Arithmetic` and `Arithmetic1`, and a function `calculator` that takes an enum value as an argument. 🌟

#### Enum Definitions

```typescript
// ENUM: lets you define different versions
enum Arithmetic {
	Add,
	Sub,
	Div,
	Mul,
}

// Behind the scenes Enums are stored as values:
// these assigned values are something that we can write.
// It starts assigning after reading the first value and then to the rest it assigns by serially incrementing the values.
enum Arithmetic1 {
	Add = 0,
	Sub = 1,
	Div = 2,
	Mul = 3,
}
```

In the first enum Arithmetic, if you don't explicitly specify values, TypeScript assigns numeric values automatically, starting from 0 and incrementing by 1 for each subsequent member. So, Arithmetic.Add is 0, Arithmetic.Sub is 1, and so on. 🧮

**In the second enum Arithmetic1, you've explicitly assigned numeric values to each member. 📊**

```typescript
// Function Using Enums
function calculator(a: number, b: number, type: Arithmetic) {
	console.log(a, b);
	console.log(type);
	// We can return Enums!! Unlike interfaces...
	return Arithmetic;
}

calculator(2, 4, Arithmetic.Add);
calculator(2, 4, Arithmetic.Sub);
calculator(2, 4, Arithmetic.Mul);
calculator(2, 4, Arithmetic.Div);
```

**In the calculator function, you've defined a parameter type of type Arithmetic. This parameter can only accept values from the Arithmetic enum. 📈**

**When you call calculator(2, 4, Arithmetic.Add), it logs the provided values and the corresponding enum value (0 in this case). 📝**

### Output 📜

```Shell
2 4
0
2 4
1
2 4
3
2 4
2
```

The output shows that the function correctly logs the values and the enum values for different arithmetic operations. 🚀
Returning Enums

```typescript
console.log(calculator(2, 4, Arithmetic.Add));
```

When you call calculator and log the result, it returns the entire Arithmetic enum. This happens because the function's return type is Arithmetic. Enums are a type, and you can return them like any other value. However, in most cases, you would return specific enum members, not the entire enum. 🎁
Output 📜

```shell
{
'0': 'Add',
'1': 'Sub',
'2': 'Div',
'3': 'Mul',
Add: 0,
Sub: 1,
Div: 2,
Mul: 3
}
```

**The output shows the enum values, both as numeric values (0, 1, 2, 3) and as string values ('Add', 'Sub', 'Div', 'Mul'). This is a feature of TypeScript enums where each enum member can be accessed by its name or its numeric value. 🌈**
