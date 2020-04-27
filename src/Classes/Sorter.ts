// Defining interface here means defining some instructions on top of the Sorter class that say if you just give use the length property, compare and swap methods, you can use this class to sort your data regardless of what data structure is.
interface ISorter {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
	//  collection instance property is going to be an instance of NumbersCollections.
	constructor(public collection: ISorter) {}
	public sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swap(j, j + 1);
				}
			}
		}
	}
}
