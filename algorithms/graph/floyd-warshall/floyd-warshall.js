const INF = 999999999;

class AllPaifrShortestPath {
  constructor(graph) {
    this.graph = graph;
    this.dist = [];
    this.V = graph.length;
    this.path = [];
  }

  floydWarshall() {
    let { dist, V, graph } = this;
    for (let i = 0; i < V; i++) {
      dist[i] = [];
      for (let j = 0; j < V; j++) {
        dist[i][j] = graph[i][j];
      }
    }

    for (let k = 0; k < V; k++) {
      for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  printSolution() {
    let { dist, V } = this;
    console.log("Following matrix shows the shortest distances between every pair of vertices");
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][j] == INF) {
          console.log("INF ");
        } else {
          console.log(dist[i][j] + " ");
        }
      }
      console.log("");
    }
  }
}