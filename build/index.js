"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./Classes/NumbersCollection");
var Sorter_1 = require("./Classes/Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -6, -3, 0, 6, 45]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
