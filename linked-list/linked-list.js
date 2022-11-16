import { LinkedListNode } from './node';
import { Comparator } from '../util/comparator';

export class LinkedList {
    constructor(compareFn) {
        this.head = null;
        this.tail = null;

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

        //? ********************************************************************************************
        
        //? the if statement check to see if the currentNode is not null
        //?     create a while loop while currentNode.next != null
        //?     increment deleteNode to the next node
        //?     then set currentNode.next = currentNode.next.next
        //?     else
        //?         set the currentNode = currentNode.next
        //? then check to see if the currentNode.next.value and it matches the value
        //?    this.tail = currentNode
        //? return delete node
        //?
        //? I would write more comments but i may write more comments on this section of the algorithm
        //? ********************************************************************************************

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
            // todo: when the phones gets charged I'm going to use my keyboard for coding.
            //* this is another comment

            //? ****************************************************************************************

            //? this is a question. this type of comment is my absolute favorite. because i can use this
            //? type of comment in the middle of a code block and ask a particular question.
            //? for instance,
            //?     What is this code really doing, it almost make any sense
            //?     everything outside of todos and debugging information, i will use these comments.
            //? ****************************************************************************************
            //! this is for things like displaying debugging information.
        }
    }
}

let ll = new LinkedList();
ll.insert()