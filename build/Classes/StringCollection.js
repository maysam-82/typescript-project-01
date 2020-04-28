"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var StringCollection = /** @class */ (function (_super) {
    __extends(StringCollection, _super);
    function StringCollection(characters) {
        var _this = _super.call(this) || this;
        _this.characters = characters;
        return _this;
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
}(Sorter_1.Sorter));
exports.StringCollection = StringCollection;
