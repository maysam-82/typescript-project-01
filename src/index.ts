import { NumbersCollection } from './Classes/NumbersCollection';
import { Sorter } from './Classes/Sorter';
const numbersCollection = new NumbersCollection([10, -6, -3, 0, 6, 45]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
