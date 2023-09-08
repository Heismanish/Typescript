function getFirstElement<T>(arr: T[]): T {
	return arr[0];
}

console.log(
	getFirstElement([1, 2, 3, 4, 5]),
	getFirstElement(["one", "Two", "three"])
);

const a = getFirstElement<number>([1, 2, 3, 4, 5]);
const b = getFirstElement<string>(["one", "Two", "three"]);

b.toLowerCase; // here we can call string methods only on "b" because it's inferred type is string whereas for "a" it's number.

// Practice:
// 1. function takes 2 inpuut of same type:
function swap<T>(a: T, b: T): T[] {
	return [b, a];
}
console.log(swap(4, 5));
console.log(swap("4", "5"));
console.log(swap(true, false));

// 2. function takes 2 input of different type:
const swapDiffArrow = <T, U>(a: T, b: U): [U, T] => {
	return [b, a];
};

function swapDiff<T, U>(a: T, b: U): [U, T] {
	return [b, a];
}
console.log(swapDiff(4, "5"));
console.log(swapDiff("4", false));
console.log(swapDiff(1, false));
