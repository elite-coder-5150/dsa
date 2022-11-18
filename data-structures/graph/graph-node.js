import { LinkedList } from "../linked-list/linked-list";
import { LinkedListNode } from "../linked-list/node";

export class GraphNode {
    constructor(value) {
        if (value === undefined) {
            throw new Error('Graph node must have a value')
        }

        const edgeComparator = (a, b) => {
            if (a.getKey() === b.getKey()) {
                return 0
            }

            return a.getKey() < b.getKey() ? -1 : 1;
        }

        this.value = value;
        this.edges = new LinkedList(edgeComparator);
    }

    addEdge(edge) {
        this.edges.append(edge);
        return this;
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    getNeighbors() {
        const edges = this.edges.toArray();

        const neighborConverter = (node) => {
            return node.value.startingNode === this ? node.values.endNode : node.values.startNode;
        }

        return edges.map(neighborConverter);
    }

    getEdges() {
        return this.edges.toArray().map((LinkedListNode) => LinkedListNode.value)
    }

    getDegrees() {
        return this.edges.toArray().length
    }

    hasEdge(requred) {
        const edgeNode = this.edges.find({
            callback: (edge) => edge === required
        })

        return !!edgeNode;
    }

    hasNeighbor(node) {
        const _node = this.edges.find({
            callback: (edge) => edge.startNode === node || edge.endNode === node
        })

        return !!_node;
    }

    findEdge(node) {
        edgeFinder = (edge) => {
            return edge.startNode === node || edge.endNode === node
        };

        const edge = this.edges.find({ callback: edgeFinder })
        return edge ? edge.value  : null
    } 

    getKey() {
        return this.value
    }
    deleteAllEdges() {
        this.getEdges().forEach((edge) => this.deleteEdge(edge));
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}