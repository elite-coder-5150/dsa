import { Comparator } from "../../util/comparator";

export class  Sort {
    constructor() {
        this.callbacks = Sort.initSortingCallback(originalCallbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }

    static initSortingCallback(originalCallbacks) {
        const callbacks = originalCallbacks || {}
        const stubCallback = () => {}

        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

        return callbacks;
    }

    sort() {
        throw new Error('sort method must be implemented')
    }
}