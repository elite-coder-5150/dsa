import { Comparator } from "../../../util/comparator"

export const jumpSearch = (arr, seekElem, comparatorCb) => {
    const comparator = new Comparator();
    const n = arr.length;

    if (!n) {
        return -1
    }

    const jumpSize = Math.floor(Math.sqrt(n));

    let blockStart = 0;
    let blockEnd = jumpSize

    while (comparator.greaterThan(seekElem, arr[Math.min(blockEnd, n) - 1])) {
        blockStart = blockEnd
        blockEnd = jumpSize;

        if (blockEnd > n) {
            return -1;
        }
    }

    let curr = blockStart;

    while (curr < Math.min(blockEnd, n)) {
        if (comparator.equal(arr[curr], seekElem)) {
            return curr;
        }

        curr += 1
    }

    return -1;
}