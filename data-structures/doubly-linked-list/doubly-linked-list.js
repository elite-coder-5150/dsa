import { DoublyLinkedListNode } from "./doubly-linked-list-node";
import { Comparator } from '../../util/comparator'

export class DoublyLinkedList {
    constructor(comparatorFn) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFn);
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNiode();

        if (this.headc) {
            this.head.prev = newNode
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode
        }

        return this;
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            
            return this;
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        return this
    }

    delete(value) {
        if (!this.head) {
            return null
        }

        let _delete = null;
        let curr = this.head

        while (curr) {
            if (this.compare.equal(curr.value, value)) {
                _delete = curr;

                if (_delete === this.head) {
                    this.head = _delete.next;

                    if (this.head) {
                        this.head.prev = null
                    }

                    if (_delete === this.tail) {
                        this.tail = null
                    }
                } else if (_delete === this.tail) {
                    this.tail = _delete.prev;
                    this.tail.next = null
                } else {
                    prevNode =  _delete.prev
                    nextNode = _delete.next;

                    prevNode.next = newNode;
                    nextNode.prev = prevNode;
                }
            }

            curr = curr.next;
        }

        return _delete
    }

    //? this is the most basic high order function
    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null
        }

        let curr = this.head

        while (curr) {
            if (callback && callback(curr.value)) {
                return curr
            }
            
            if (value !== undefined) {
                return curr
            }

            curr = curr.next
        }

        return null;
    }

    deleteTail() {
        if (!this.tail) {
            return null; // there is no tail to delete
        }

        if (this.head === this.tail) {
            const _deleteTail = this.tail
            this.head = null
            this.tail = null
            return _deleteTail
        }

        const _deleteTail = this.tail;

        this.tail = this.tail.prev
        this.tail.next = null;

        return _deleteTail
    }

    deleteHead() {
        if (!this.head) {
            return null
        }

        const _deleteHead = this.head

        if (this.head.next) {
            this.head = this.next.next
            this.head.prev = null
        } else {
            this.head = null;
            this.tail = null
        }

        return _deleteHead
    }

    toArray() {
        const nodes = []

        let curr = this.head

        while (curr) {
            nodes.push(curr)
            curr = curr.next
        }

        return nodes
    }

    fromArray(values) {
        values.forEach((value) => {
            this.append(value)
        });
    }

    toString(callback) {
        return this.toArray().map((node) => node.toString(callback)).toString
    }

    reverse() {
        let curr = this.head,
            prev = null,
            next = null;

        while (curr) {
            next = curr.next
            prev = curr.prev

            curr.next = prev
            curr.prev = next

            prev = curr
            curr = next
        }

        this.tail = this.head;
        this.head = prev

        return this;
    }
}