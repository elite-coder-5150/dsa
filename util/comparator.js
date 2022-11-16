export class Comparator {
    constructor(compareFn) {
        this.compare = compareFn || Comparator.defaultCompareFn;
    }

    static defaultCompareFn(a, b) {
        if (a === b) {
            return 0
        }

        return a < b ? -1 : 1
    }

    equal(a, b) {
        return this.compare(a, b) === 0
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0
    }

    lessThanEqual(a, b) {
        return this.lessThan(a, b) || this.lessThanEqual(a, b)
    }

    greaterThanEqual(a, b) {
        return this.greaterThan || this.equal(a, b)
    }

    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(a, b)
    }
}