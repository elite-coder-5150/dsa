import { Sort } from '../sort';

const BASE_CHAR_CODE = 97;
const NUMBER_OF_POSSIBLE_DIGITS = 10
const ENGLISH_ALPHEBET_LENGTH = 26

export class RadixSort extends Sort {
    sort(orinArray) {
        const isArrayOfNumbers = this.isArrayOfNumbers(orinArray);

        let sortedArr = [...orinArray]
        const numPasses = this.determineNumPasses(sortedArr);

        for (let curr = 0; curr < numPasses; curr += 1) {
            const buckets = isArrayOfNumbers ?
                this.placeElemsInNumberBucket(sortedArr, curr) :
                this.placeElemsnCharacterBucket(sortedArr, curr, numPasses)

            sortedArr = buckets.reduce((acc, val) => {
                return [...acc, ...val]
            }, [])
        }

        return sortedArr
    }

    placeElemsInNumberBucket(arr, index) {
        const modded = 10 ** (index + 1)
        const divided = 10 ** index
        const buckets = this.createBuckets(NUMBER_OF_POSSIBLE_DIGITS)

        arr.forEach((elem) => {
            this.callbacks.visitingCallback(elem)

            if (elem < divided) {
                buckets[0].push(elem)
            } else {
                const currDigit = Math.floor((elem % modded) / divided)
                buckets[currDigit].push(elem)
            }
        });

        return buckets;
    }

    placeElemsnCharacterBucket(arr, index, numPasses) {
        const buckets = this.createBuckets(ENGLISH_ALPHEBET_LENGTH)

        arr.forEach((elem) => {
            this.callbacks.visitingCallback(elem)
            const currBucket = this.getCharCodeOfElemAtIndex(elem, index, numPasses)
            buckets[currBucket].push(elem)
        });

        return buckets
    }

    getCharCodeOfElemAtIndex(elem, index, numPasses) {
        if ((numPasses - index) > elem.length) {
            return ENGLISH_ALPHEBET_LENGTH - 1
        }

        const charPos = index > elem.length - 1 ? 0 : elem.length - index - 1;

        return elem.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE
    }

    determineNumPasses (arr) {
       return this.getLengthOfLongestElem(arr);
    }

    getLengthOfLongestElem(arr) {
        if (this.isArrayOfNumbers(arr)) {
            return Math.floor(Math.log10(Math.max(...arr)))
        }
    }

    isArrayOfNumbers(arr) {
        return this.isNumber(arr[0])
    }

    createBuckets(numBuckets) {
        return new Array(numBuckets).fill(null).map(() => [])
    }
    isNumber() {
        return Number.isInteger(elem);
    }
}