export class LinkedListNode {
    construuctor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback (this.value) : `${this.value}`
    }
}