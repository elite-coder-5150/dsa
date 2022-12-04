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

    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

        return node ? node.value.value : undefined;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    getKeys() {
        return Object.keys(this.keys);
    }

    getValues() {
        return Object.keys(this.keys).map(key => this.get(key));
    }

    getEntries() {
        return Object.keys(this.keys).map(key => ({ key, value: this.get(key) }));
    }

    getBuckets() {
        return this.buckets;
    }

    getBucketByKey(key) {
        return this.buckets[this.hash(key)];
    }

    getBucketByIndex(index) {
        return this.buckets[index];
    }

    getBucketSize() {
        return this.buckets.length;
    }

    getKeysCount() {
        return Object.keys(this.keys).length;
    }

    getValuesCount() {
        return Object.keys(this.keys).length;
    }

    getEntriesCount() {
        return Object.keys(this.keys).length;
    }

    getBucketsCount() {
        return this.buckets.length;
    }

    getBucketsSize() {
        return this.buckets.length;
    }

    getBucketsAverageSize() {
        return this.getKeysCount() / this.getBucketsCount();
    }

    getBucketsMaxSize() {
        return Math.max(...this.buckets.map(bucket => bucket.toArray().length));
    }

    getBucketsMinSize() {
        return Math.min(...this.buckets.map(bucket => bucket.toArray().length));
    }

    getBucketsStandardDeviation() {
        const average = this.getBucketsAverageSize();
        const squareDiffs = this.buckets.map(bucket => (bucket.toArray().length - average) ** 2);
        const avgSquareDiff = squareDiffs.reduce((total, diff) => total + diff) / this.buckets.length;
        return Math.sqrt(avgSquareDiff);
    }

    getBucketsStandardDeviationRatio() {
        return this.getBucketsStandardDeviation() / this.getBucketsAverageSize();
    }
}