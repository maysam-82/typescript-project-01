"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./Classes/NumbersCollection");
var StringCollection_1 = require("./Classes/StringCollection");
var LinkedList_1 = require("./Classes/LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -6, -3, 0, 6, 45]);
var stringCollection = new StringCollection_1.StringCollection('xZQblaP');
var linkedList = new LinkedList_1.LinkedList();
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
