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
//  LinkedList is arrays of nodes which contain a value (number) and a reference of next node inside a chain of nodes.
// Here we have two classes. One is Node and another one is LinkedList.
var NodeItem = /** @class */ (function () {
    function NodeItem(data) {
        this.data = data;
        // nextNode type will be NodeItem or null. Null means there is no node after current node. The default of nextNode while instanciating of class is null since there is no node at the first time.
        this.nextNode = null;
    }
    return NodeItem;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // if we do not have any constructor for a class here, there is no need to call `super()`. Sorter's constructor will be automatically called for us.
        _this.headOfList = null;
        return _this;
    }
    LinkedList.prototype.addNode = function (value) {
        var nodeItem = new NodeItem(value);
        if (!this.headOfList) {
            this.headOfList = nodeItem;
            // returning void type means that we are not specificly returning a value. So we can still use return statement like below.
            return;
        }
        var node = this.headOfList;
        // If node has nextNode property, update node reference to next node. Do the following until node.nextNode = null.
        while (node.nextNode) {
            node = node.nextNode;
        }
        node.nextNode = nodeItem;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.headOfList)
                return 0;
            var length = 1;
            var node = this.headOfList;
            while (node.nextNode) {
                length++;
                node = node.nextNode;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.atNode = function (nodeIndex) {
        if (!this.headOfList)
            throw new Error('index out of bounds');
        var counter = 0;
        // since node.nextNode will return NodeItem | null we have to add type annotation.
        var node = this.headOfList;
        while (node) {
            if (counter === nodeIndex)
                return node;
            counter++;
            node = node.nextNode;
        }
        throw new Error('index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.headOfList)
            throw new Error('Node list is empty!');
        return this.atNode(leftIndex).data > this.atNode(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.atNode(leftIndex);
        var rightNode = this.atNode(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.headOfList)
            return;
        var node = this.headOfList;
        while (node) {
            console.log(node.data);
            node = node.nextNode;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
