import { Heap } from './heap'

export class MinHeap extends Heap {
    pairsIsInCorrectOrder(firstElem, secondElem) {
        return this.compare.greaterThanEqual(firstElem, secondElem);
    }
}