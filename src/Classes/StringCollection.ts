import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
	constructor(public characters: string) {
		super();
	}
	public get length(): number {
		return this.characters.length;
	}
	public compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.characters[leftIndex].toLocaleLowerCase() >
			this.characters[rightIndex].toLocaleLowerCase()
		);
	}
	public swap(leftIndex: number, rightIndex: number): void {
		const listOfChars = this.characters.split('');
		const leftHand = listOfChars[leftIndex];
		listOfChars[leftIndex] = listOfChars[rightIndex];
		listOfChars[rightIndex] = leftHand;
		this.characters = listOfChars.join('');
	}
}
