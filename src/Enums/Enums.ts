// ENUM: lets you define different versions
enum Arithmetic {
	Add,
	Sub,
	Div,
	Mul,
}
// Behind the scenes Enums are stored as values:
// these assigned values are something that we can write.
// It starts assigning after reading the first value and then to the rest it assigns by serially incrrementing the values.
enum Arithmetic1 {
	Add = 0,
	Sub = 1,
	Div = 2,
	Mul = 3,
}

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
// OUTPUT:
// 2 4
// 0
// 2 4
// 1
// 2 4
// 3
// 2 4
// 2
// 2 4
// 0

console.log(calculator(2, 4, Arithmetic.Add));
// OUTPUT:
// {
//     '0': 'Add',
//     '1': 'Sub',
//     '2': 'Div',
//     '3': 'Mul',
//     Add: 0,
//     Sub: 1,
//     Div: 2,
//     Mul: 3
//   }
