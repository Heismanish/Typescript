// TYPES:
// - Same as interfaces
// - Can't implement classes

type Person = {
	name: string;
	age: number;
	greet(): string;
};
/////////////////////////////////////////////////////////////////

// Differnece b/w "types" and "interfaces":
// 1. Interfaces can be implemented by classs.
// 2. Interfaces can extend each other.
// 3. Types can have union(|) and intersection(&)

////////////////////////////////////////////////////////////////
// Using "interfaces" in "types" ;
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

///////////////////////////////////////////////////////////////
type Circle = {
	radius: number;
	circumference(): number;
	// area(): number;
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
//////////////////////////////////////////////////////////////
