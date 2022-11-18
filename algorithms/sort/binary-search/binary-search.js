import { Comparator } from "../../../util/comparator";

//? this is such a beautiful algorithm
export const binarySearch = (arr, seek, compareCB) => {
    const comparator = new Comparator(compareCB);
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (comparator.equal(arr[mid], seek)) {
            return mid;
        }

        if (comparator.lessThan(arr[mid], seek)) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1;
}
