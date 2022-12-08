/**
 * 1. Initialize the distances and prevNode objects and initialize the queue
 * 2. set the distance to the startNode to 0 and enqueue the startNode
 * 3. dequeue the start node and get all of its neighbors
 * 4. then iterate over all the neighbors and calculate the distance from the 
 *    current node to the neighbor
 * 
 * 5. if the distance to the neighbor is less than the current distance to the 
 *    neighbor, then update the distance to the neighbor.
 * 
 * 6. dequeue the neighbor if it hashn't been visited and enqueue it.
 * 7. repeat steps 3-6 until the queue is empty
 * 
 * @param {*} graph 
 * @param {*} startNode 
 * @returns 
 */
export const bellmainFord = (graph, startNode) => {
    const distances = {};
    const previousVertices = {};
    const queue = new Queue();
    const visitedVertices = {};
    const vertices = graph.getAllVertices();
    const INF = 999999999;
    // Init all distances with infinity assuming that currently we can't reach
    // any of the vertices except start one.
    vertices.forEach((vertex) => {
        distances[vertex.getKey()] = INF;
        previousVertices[vertex.getKey()] = null;
    });
    // We are already at the startVertex so the distance is zero.
    distances[startNode.getKey()] = 0;
    // Init vertices queue.
    queue.enqueue(startNode);
    while (!queue.isEmpty()) {
        const currentVertex = queue.dequeue();
        // Add current vertex to visited ones.
        visitedVertices[currentVertex.getKey()] = currentVertex;
        // Get all neighbors of the current vertex.
        const currentVertexNeighbors = currentVertex.getNeighbors();
        // Go through all vertex neighbors.
        currentVertexNeighbors.forEach((neighbor) => {
            // Calculate new distance to the neighbor.
            const edge = graph.findEdge(currentVertex, neighbor);
            const distanceToNeighbor = distances[currentVertex.getKey()] + edge.weight;
            // If new distance to the neighbor is less than the previous one then
            // overwrite it.
            if (distanceToNeighbor < distances[neighbor.getKey()]) {
                distances[neighbor.getKey()] = distanceToNeighbor;
                // Also overwrite previous closest vertex.
                previousVertices[neighbor.getKey()] = currentVertex;
                // Insert neighbor into the queue only if it hasn't been visited yet.
                if (!visitedVertices[neighbor.getKey()]) {
                    queue.enqueue(neighbor);
                }
            }
        });
    }
    return {
        distances,
        previousVertices,
    };
}