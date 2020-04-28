"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.headOfList = null;
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
}());
exports.LinkedList = LinkedList;
