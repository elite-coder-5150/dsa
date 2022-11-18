import { Sort } from "../sort";

export class BubbleSort extends Sort {
    sort(originalArray) {
        let swapped = false;

        const arr = [...originalArray];

        for (let i = 1; i < arr.length; i++) {
            swapped = false;

            this.callbacks.visitingCallback(arr[i]);

            for (let j = 0; j < arr.length - i; j += 1) {
                this.callbacks.visitingCallback(arr[j]);

                if (this.comparator.lessThan(arr[j + 1], arr[j])) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

                    swapped = true;
                }
            }

            if (!swapped) {
                return arr
            }
        }

        return arr;ß
    }
}