import Graph from '../../../data-structures/graph/graph';
export const detectDirectedCycle = (graph) => {
    let cycle = null;

    const dfsParentMap = new Map();
    const whiteSet = new Set(graph.getAllNodes());
    const graySet = new Set();
    const blackSet = new Set();
    const graph = new Graph();
    let value = Object.keys(whiteSet).length,

    graph.getAllNodes().forEach((node) => {
        whiteSet[node.getKey()] = node;
    });

    const callback = {
        enterVertex: ({ currentNode, prevNode }) => {
            if (graySet[currentNode.getKey()]) {
                cycle = {};

                let currCycleNode = currentNode;
                let prevCycleNode = prevNode;

                while (currCycleNode.getKey() !== prevCycleNode.getKey()) {
                    cycle[currCycleNode.getKey()] = currCycleNode;
                    currCycleNode = prevCycleNode;
                    prevCycleNode = dfsParentMap[prevCycleNode.getKey()];
                }

                cycle[currCycleNode.getKey()] = prevCycleNode;
            } else {
                graySet[currentNode.getKey()] = currentNode;
                delete whiteSet[currentNode.getKey()];
                dfsParentMap[currentNode.getKey()] = prevNode;

                dfsParentMap[currentNode.getKey()] = prevNode;
            }
        },

        leaveNode = ({ currentNode }) => {
            blackSet[currentNode.getKey()] = currentNode;
            delete graySet[currentNode.getKey()];
        },

        allowTraversal = ({ nextNode }) => {
            if (cycle) {
                return false;
            }
            return !blackSet[nextNode.getKey()];
        },

        
        /*
        while (this.value){
            const firstWhiteKey = Object.keys(whiteSet)[0];
            const startNode = whiteSet[firstWhiteKey];

            graph.depthFirstSearch(graph, startNode, callback);
    */}
}
    