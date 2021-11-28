import Queue from "../../../Queue/index.js";

class Graph {
    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjacencyList = new Map();
    }

    // Time complexity: O(1)
    addVertex(v) {
        this.adjacencyList.set(v, []);
    }

    // Time complexity: O(1)
    addEdge(v, w) {
        this.adjacencyList.get(v).push(w);

        if (!this.adjacencyList.has(w)) this.addVertex(w);
        
        this.adjacencyList.get(w).push(v);
    }

    printGraph() {
        const vertices = this.adjacencyList.keys();
        
        for (const vertex of vertices) {
            const values = this.adjacencyList.get(vertex);
            
            let result = '';

            for (const value of values) {
                result += value + ' '; 
            }

            console.log(`${vertex} -> ${result}`)
        }
    }

    // Breadth-first search
    bfs(startingVertex) {
        const visited = {};
        const visitList = new Queue();

        visited[startingVertex] = true;
        visitList.enqueue(startingVertex);

        while (!visitList.isEmpty()) {
            const vertexFromQueue = visitList.dequeue();
           
            console.log(vertexFromQueue);

            const vertices = this.adjacencyList.get(vertexFromQueue);

            for (const vertex of vertices) {
                if (!visited[vertex]) {
                    visited[vertex] = true;
                    visitList.enqueue(vertex);
                }
            }
        }
    }
    
    // Depth-first search
    dfs(startingVertex) {
        const visited = {};

        const DFSUtil = (vertex, visited) => {
            visited[vertex] = true;

            console.log(vertex);

            const vertices = this.adjacencyList.get(vertex);

            for (const vertex of vertices) {
                if (!visited[vertex]) DFSUtil(vertex, visited);
            }
        }

        DFSUtil(startingVertex, visited);
    }
}

const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (const vertex of vertices) g.addVertex(vertex);

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.dfs('A')