import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		// Reference to the constructor of the parent class. By running super method, we are running the constructor of the parent class and making sure that set of code is executed.
		super();
	}
	// Adding Accessor `getter` since it only returns a property and it is not really a method to be called. While instantiating of this class we will only write numberCollections.length without ().
	public get length(): number {
		return this.data.length;
	}
	public compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}
	public swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}
}
