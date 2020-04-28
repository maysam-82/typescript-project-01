//  LinkedList is arrays of nodes which contain a value (number) and a reference of next node inside a chain of nodes.
// Here we have two classes. One is Node and another one is LinkedList.
class NodeItem {
	// nextNode type will be NodeItem or null. Null means there is no node after current node. The default of nextNode while instanciating of class is null since there is no node at the first time.
	nextNode: NodeItem | null = null;
	constructor(public data: number) {}
}

export class LinkedList {
	headOfList: NodeItem | null = null;
	public addNode(value: number): void {
		const nodeItem = new NodeItem(value);
		if (!this.headOfList) {
			this.headOfList = nodeItem;
			// returning void type means that we are not specificly returning a value. So we can still use return statement like below.
			return;
		}
		let node = this.headOfList;
		// If node has nextNode property, update node reference to next node. Do the following until node.nextNode = null.
		while (node.nextNode) {
			node = node.nextNode;
		}
		node.nextNode = nodeItem;
	}
	public get length(): number {
		if (!this.headOfList) return 0;
		let length = 1;
		let node = this.headOfList;
		while (node.nextNode) {
			length++;
			node = node.nextNode;
		}
		return length;
	}
	private atNode(nodeIndex: number): NodeItem {
		if (!this.headOfList) throw new Error('index out of bounds');
		let counter = 0;
		// since node.nextNode will return NodeItem | null we have to add type annotation.
		let node: NodeItem | null = this.headOfList;
		while (node) {
			if (counter === nodeIndex) return node;
			counter++;
			node = node.nextNode;
		}
		throw new Error('index out of bounds');
	}
	public compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.headOfList) throw new Error('Node list is empty!');
		return this.atNode(leftIndex).data > this.atNode(rightIndex).data;
	}
	public swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.atNode(leftIndex);
		const rightNode = this.atNode(rightIndex);
		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}
	public print(): void {
		if (!this.headOfList) return;
		let node: NodeItem | null = this.headOfList;
		while (node) {
			console.log(node.data);
			node = node.nextNode;
		}
	}
}
