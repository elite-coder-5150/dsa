export class Edge {
    constructor(startNode, endNode, weight = 0) {
        this.startNode = startNode
        this.endNode = endNode
        this.weight = weight;
    }

    getKey() {
        const startNodeKey = this.startNode.getKey();
        const endNodeKey = this.endNode.getKey();

        return `${startNodeKey}_${endNodeKey}`;
    }

    //? same as swaping a function
    reverse() {
        const temp =  this.startNode
        this.startNode = this.endNode
        this.endNode = temp

        return this;
    }

    toString() {
        return this.getKey();
    }
}