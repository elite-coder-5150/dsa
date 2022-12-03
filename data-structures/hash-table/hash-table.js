import LinkedList from '../linked-list/linked-list';

const  defaultHashTableSize = 32;

export class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());

        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );

        return hash % this.buckets.length;
    }
}