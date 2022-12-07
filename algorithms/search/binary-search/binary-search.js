import { Comparator } from '../../../util/comparator';

export const binarySearch = (arr, seekElem, comparatorCb) =>{
    const comparator = new Comparator()

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (comparator.equal(arr[mid], seekElem)) {
            return mid;
        }

        if (comparator.lessThan(arr[mid], seekElem)) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1;
}