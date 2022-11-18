import { Comparator } from '../../util/comparator';

//! can't instantiate this class directly
export class Heap {
    constructor(comparatorFn) {
        if (new.target === Heap) {
            throw new TypeError('cannot construct heap instance directly')
        }

        this.heapContainer = [];
        this.compare = new Comparator(comparatorFn)
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(partentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    hasRightCild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    swap (a, b) {
        const temp = this.heapContainer[b];
        this.heapContainer[b] = this.heapContainer[a];
        this.heapContainer[a] = temp
    }

    peek() {
        if (this.heapContainer.length === 0)
            return null

        return this.heapContainer[0]
    }

    poll() {
        if (this.heapContainer.length === 0) 
            return null

        if (this.heapContainer.length === 1)
            return this.hasLeftChild.pop()

        const item = this.heapContainer[0]

        this.heapContainer[0] = this.heapContainer.pop()
        this.heapifyDown()

        return item
    }

    add(item) {
        this.heapContainer.push(item)
        this.heapifyUp();

        return this
    }

    remove(item, comparator = this.compare) {
        const numItemsToRemove = this.find(item, comparator).pop();

        for (let i = 0; i < numItemsToRemove; i += 1) {
            const remove = this.find()
        }
    }

    find(item, comparator = this.compare) {

    }
}