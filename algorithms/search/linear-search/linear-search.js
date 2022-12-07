import { Comparator } from "../../../util/comparator"

/**
 * Linear search implementation
 * @param {*} arr array
 * @param {*} seekElem the element to find
 * @param {*} comparatorCb callback function to call the compare functions
 * @returns the found element
 */
export const linearSearch = (arr, seekElem, comparatorCb) => {
    const comparator = new Comparator()
    const found = []

    arr.forEach((elem, index) => {
        if (comparator.equal(elem, seekElem)) {
            found.push(index)
        }
    });

    return found;
}