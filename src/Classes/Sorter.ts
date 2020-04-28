// Defining interface here means defining some instructions on top of the Sorter class that say if you just give use the length property, compare and swap methods, you can use this class to sort your data regardless of what data structure is.
interface ISorter {
	length: number;
	// the name of arguments can not be with the name of arguments in the actual implementation. But it is better to be because of better understanding of the code.
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}
export abstract class Sorter {
	// `abstract` is used to mark certain methods as existing in the future or essentially implemented by some child class.
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number; /*  Since it is a getter and simply returns a number */

	public sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
