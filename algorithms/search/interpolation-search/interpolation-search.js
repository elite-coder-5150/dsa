export const interpolationSearch = (arr, seekElem) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const rangeDelta = arr[right] - arr[left];
        const indexDelta = right - left;
        const valueDelta = seekElem - arr[left];

        if (rangeDelta < 0) {
            return -1;
        }

        if (valuwDelta < 0) {
            return -1;
        }

        if (!rangeDelta) {
            return arr[left] === seekElem ? left : -1;
        }

        const middle = left + Math.floor((valueDelta * indexDelta) / rangeDelta);

        if (arr[middle] === seekElem) {
            return middle;
        }

        if (arr[middle] === seekElem) {
            left = middle;
        }

        if (arr[middle] < seekElem) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}