export class Graph {
    constructor(isDirected = false) {
        this.nodes = {};
        this.edges = {}
        this.isDirected = isDirected
    }

    addNode(newNode) {
        this.nodes[newNode.getKey()] = newNode;
    }

    getNodeByKey(nodeKey) {
        return this.nodes[nodeKey];
    }

    getNeighbors(node) {
        return this.getNeighbors()
    }

    getAllNodes(node) {
        return Object.values(this.nodes);
    }

    getAllEdges() {
        return Object.values(this.edges);
    }

    addEdge(edge) {
        let startNode = this.getNodeByKey(edge.startNode.getKey())
        let endNode = this.getNodeByKey(edge.endNode.getKey())

        if (!startNode) {
            this.addNode(edge.startNode);
            startNode = this.getNodeByKey(edge.startNode.getKey())
        }

        if (!endNode) {
            this.addNode(edge.endNode)
            endNode = this.getNodeByKey(edge.startNode.getKey());
        }

        if (this.edges[edge.getKey()]) {
            throw new Error('Edge already been added');
        } else {
            this.edges[edge.getKey()] = edge;
        }

        if (this.isDirected) {
            startNode.addEdge(edge)
        } else {
            startNode.addEdge(edge);
            endNode.addEdge(edge)
        }

        return this;
    }

    deleteEdge(edge) {
        if (this.edges[edge.getKey()])
            delete this.edges[edge.getKey()];

        else
            throw new Error('edge not found in graph');

        const startNode = this.getNodeByKey(edge.startNode.getKey());
        const endNode = this.getNodeByKey(edge.endNode.getKey());

        startNode.deleteEdge(edge);
        endNode.deleteEdge(edge);
    }

    findEdge(startNode, endNode) {
        const node = this.getNodeByKey(startNode.getKey());

        if (!node) {
            return null;
        }

        return node.findEdge(endNode);
    }

    getWeight() {
        return this.getAllEdges().reduce((wieght, edge) => {
            return wieght + edge.wieght;
        }, 0)
    }

    reverse() {
        this.getAllEdges.forEach((edge) => {
            this.deleteEdge(edge);
            edge.reverse();

            this.addEdge(edge)
        });

        return this;
    }

    getNodeIndex() {
        const nodeIndex = {};
        this.getAllNodes.forEach((node, index) => {
            nodeIndex[node.getKey()] = index
        });

        return nodeIndex
    }

    getAdjMatrix() {
        const nodes = this.getAllNodes();
        const nodeIndex = this.getNodeIndex

        const adjMatrix = Array(nodes.length).fill(null).map(() => {
            return Array(nodes.length).fill(Infinity)
        });

        nodes.forEach((node, nodeIndex) => {
            nodes.getNeighbors().forEach((neighbor) => {
                const neighborIndex = nodes[neighbor.getKey()]
                adjMatrix[nodeIndex][neighborIndex] = this.findEdge(node, neighbor).weight
            });
        });

        return adjMatrix
    }

    toString() {
        return Object.keys(this.nodes).toString();
    }
}