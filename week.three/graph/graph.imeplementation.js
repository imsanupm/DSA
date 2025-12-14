class Graph{
    constructor(){
        
        this.adjacencylist = {};
    };
    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set();
        }
    };
    addEdge(vertex1 , vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addVertex(vertex1);
        };
        if(!this.adjacencylist[vertex2]){
            this.addVertex(vertex2);
        };
        this.adjacencylist[vertex1].add(vertex2);
        this.adjacencylist[vertex2].add(vertex1);
    };
    
    removeVertex(vertex){
        if(!this.adjacencylist[vertex]){
            return;
        };
        for(let adjacentVertex of this.adjacencylist[vertex]){
            this.removeEdges(vertex, adjacentVertex)
        }
        delete this.adjacencylist[vertex];
        return true;
    }
     removeEdges(vertex1, vertex2){
         this.adjacencylist[vertex1].delete(vertex2);
         this.adjacencylist[vertex2].delete(vertex1);
     };
     display(){
        for(let vertex in this.adjacencylist){
            console.log(`${vertex}--> ${[...this.adjacencylist[vertex]]}`);
            
        }
     }
};

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A","B");
graph.addEdge("B","C")
graph.display()
//graph.removeVertex("A")
//graph.removeEdges("A","B");


