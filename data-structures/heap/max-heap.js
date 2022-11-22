import { Heap } from './heap';

export class MaxHeap extends Heap {
    pairsIsInCorrectOrder(firstElem, secondElem) {
        return this.compare.greaterThanEqual(firstElem, secondElem);
    }
}