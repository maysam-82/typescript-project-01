"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // Adding Accessor `getter` since it only returns a property and it is not really a method to be called. While instantiating of this class we will only write numberCollections.length without ().
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
