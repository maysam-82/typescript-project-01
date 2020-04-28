import { NumbersCollection } from './Classes/NumbersCollection';
import { Sorter } from './Classes/Sorter';
import { StringCollection } from './Classes/StringCollection';
import { LinkedList } from './Classes/LinkedList';
const numbersCollection = new NumbersCollection([10, -6, -3, 0, 6, 45]);
const stringCollection = new StringCollection('xZQblaP');
const linkedList = new LinkedList();
// numbersCollection.sort();
// console.log(numbersCollection.data);
// stringCollection.sort();
// console.log(stringCollection.characters);
linkedList.addNode(500);
linkedList.addNode(-10);
linkedList.addNode(-5);
linkedList.addNode(6);
linkedList.addNode(0);

linkedList.sort();

linkedList.print();
