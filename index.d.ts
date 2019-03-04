declare module "scatter-swap" {

	export default class ScatterSwap {
		constructor(originalInteger: number|string);
		constructor(originalInteger: number|string, spin: number);
		constructor(originalInteger: number|string, spin: number, digit: number);

		hash(): string;
		reverseHash(): string;
	}
}
