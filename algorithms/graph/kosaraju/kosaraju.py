from collections import defaultdict

class Graph:
    def __init__(self, nodes):
        self.v = nodes
        self.graph = defaultdict

    def addEdge(self, u, v):
        self.graph[u].append(v)

    def dfs_util(self, v, visited):
        visited[v] = True
        
        print(v)

        for i in self.graph[v]:
            if visited[i] == False:
                self.dfs_util(i, visited)


    def fillOrder(self, v, visited, stack):
        visited[v] = True

        for i in self.graph[v]:
            if visited[i] == False:
                self.fillOrder(i, visited, stack)
        
        stack = stack.append(v)

    def getTranspose(self):
        g = Graph(self.v)

        for i in self.graph:
            for j in self.graph[i]:
                g.addEdge(j, i)
        return g

    def printSCC(self):
        stack = []
        visited = [False] * (self.v)

        for i in range(self.v):
            if visited[i] == False:
                self.fillOrder(i, visited, stack)

        gr = self.getTranspose()

        visited = [False] * (self.v)

        while stack:
            i = stack.pop()

            if visited[i] == False:
                gr.dfs_util(i, visited)
            
g = Graph(5);
g.addEdge(1, 0)
g.addEdge(0, 2)
g.addEdge(2, 1)
g.addEdge(0, 3)
g.addEdge(3, 4)

print('following are strongly connected components in a given graph')

g.printSCC()