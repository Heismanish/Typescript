// Functions:
function sum(a: number, b: string) {
	a++;
	b = "lol";
	return a + b;
}
console.log(sum(1, "Piece"));

function calculateTax(income: number, taxYear = 2002): number {
	if (taxYear < 2001) {
		return income * 1.5;
	}
	return income * 1.4;
}
console.log(calculateTax(60_000));

function KgToLbs(Weight: number | string): number {
	if (typeof Weight === "number") {
		return Weight * 2.2;
	} else {
		return parseInt(Weight) * 1.5;
	}
}
console.log(KgToLbs(300));

// Objects
// using type alises:
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

// Working with nulls and undefined:
function Names(name: string | null | undefined) {
	if (name) {
		console.log(name);
	} else {
		console.log("Hola!");
	}
}
Names(null);

// Optional Chaining:
type Customer = {
	birthday: number;
};

// function getCustomer(id: number): Customer | null | undefined {
// 	return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(0);
// Optional propery access operator
// console.log(customer?.birthday);

// Optional element access operator
// customer?.[0]

// Optional call
const log: any = null;
log?.("a");
