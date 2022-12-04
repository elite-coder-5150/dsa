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

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }
}