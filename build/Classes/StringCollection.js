"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection = /** @class */ (function () {
    function StringCollection(characters) {
        this.characters = characters;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.characters.length;
        },
        enumerable: true,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.characters[leftIndex].toLocaleLowerCase() >
            this.characters[rightIndex].toLocaleLowerCase());
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var listOfChars = this.characters.split('');
        var leftHand = listOfChars[leftIndex];
        listOfChars[leftIndex] = listOfChars[rightIndex];
        listOfChars[rightIndex] = leftHand;
        this.characters = listOfChars.join('');
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
