import { LinkedList } from '../linked-list/linked-list';

export class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }

        this.linkedList.head.value;
    }

    push(value) {
        this.linkedList.prepend(value)
    }

    pop() {
        remove = this.linkedList.deleteHead();
        return rmove ? remove.value : null
    }

    toArray() {
        return this.linkedList.toArray().map((linkedListNode) => linkedListNode.value)
    }
}