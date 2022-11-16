import { LinkedListNode } from './node';
import { Comparator } from '../util/comparator';

export class LinkedList {
    constructor(compareFn) {
        this.head = null;
        this.tail = null;

        this.node = new LinkedListNode();

        this.compare = new Comparator(conpareFn);
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode();

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this
        }

        this.tail.next = newNode
        this.tail = newNode

        return this;
    }

    insert(value, rawIndex) {
        const index = rawIndex < 0 ? 0 : rawIndex

        if (index === 0) {
            this.prepend(value)
        } else {
            let count = 1
            let currentNode = this.head
            const newNode = LinkedListNode();

            while (currentNode) {
                if (count === index)
                    break;

                currentNode = currentNode.next
                count += 1
            }

            if (currentNode) {
                newNode.next = currentNode.next
                currentNode.next = newNode
            } else {
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode
                } else {
                    this.head = newNode
                    this.tail = newNode
                }
            }
        }

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        while (this.head  && this.compare.equal(this.head.value, value)) {
            deleteNode = this.head
            this.head = this.head.next;
        }

        let currentNode = this.head

        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deleteNode = currentNode.next
                    currentNode.next = currentNode.next.next
                } else {
                    currentNode = currentNode.next
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode
        }

        return deleteNode
    }

    find(value = undefined, callback = undefined) {
        if (!this.head)
            return null

        let currentNode = this.head

        while (currentNode) {
        
        
        }
    }
}

let ll = new LinkedList();
ll.insert()

if (ll.find(undefined, undefined)) {
    this.error = 'an error happen when trying to find an item within the list'
    return false;
}