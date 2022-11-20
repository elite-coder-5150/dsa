import { Graph } from "../../../data-structures/graph/graph"
import { GraphNode } from "../../../data-structures/graph/graph-node";

const findAllPaths = () => {

}

const getCycleWeight = (adjMat) => {

}

//? I think it would be easier to turn this in to a class
export const tsp = (graph) => {
    let _graph = new Graph();
    let node = new GraphNode();
    const start = _graph.getAllNodes()[0]
    const allPossiblePaths = findAllPaths(start);

    const allPossibleCycles = allPossiblePaths.filter((path) => {
        const lastNode = path[path.length - 1]
        const lastNodeNeighbor = lastNode.getNeighbors();

        return lastNodeNeighbor.includes(start)
    })

    let adjMat = _graph.getAdjMatrix()
}
