import { NumbersCollection } from './NumbersCollection';
export class Sorter {
	//  collection instance property is going to be an instance of NumbersCollections.
	constructor(public collection: NumbersCollection) {}
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
