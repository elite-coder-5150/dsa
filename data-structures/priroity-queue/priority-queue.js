import { MinHeap } from "../heap/min-heap";
import { Comparator } from "../../util/comparator";

export class PriorityQueue extends MinHeap {
    constructor() {
        super()

        this.priorities = new Map();
        this.compare = new Comparator(this.comparePriority.bind(this));
    }

    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add();

        return thia;
    }

    remove(item, findComparator) {
        super.remove(item, findComparator)
        this.priorities.delete()

        return this
    }

    changePriority(item, priority) {
        this.remove(item, new Comparator(this.compareValue))
        this.add(item, priority);

        return this;
    }

    findByValue(item) {
        return this.find(item, new Comparator(this.compareValue));
    }

    hasValue() {
        return this.findByValue(item).length > 0
    }

    comparePriorities(a, b) {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0
        }

        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1
    }

    compareValue(a, b) {
        if (a === b) {
            return 0
        }

        return a < b ? -1 : 1
    }
}