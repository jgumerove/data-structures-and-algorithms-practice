class Graph {
    constructor(){
      this.adjacencyList = {}
    }
    
    addVertex(vertex){
      this.adjacencyList[vertex] = []
    }
    
    addEdge(vertex1, vertex2){
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
    
    removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((element) => element !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((element) => element !== vertex1)
    }
    
    removeVertex(vertex){
      while(this.adjacencyList[vertex].length !== 0){
        let removedEdge = this.adjacencyList[vertex].pop()
        //this.adjacencyList[removedEdge] = this.adjacencyList[removedEdge].filter((element) => element !== vertex)
        this.removeEdge(vertex, removedEdge)
      }
      delete this.adjacencyList[vertex]
    }
  }
  
  
  let graph = new Graph()
  graph.addVertex("Los Angeles")
  graph.addVertex("Dallas")
  graph.addVertex("Aspen")
  graph.addVertex("New York")
  graph.addEdge("Los Angeles", "Dallas")
  graph.addEdge("Aspen", "Los Angeles")
  console.log(graph.addEdge("Los Angeles", "New York"))
  graph.removeEdge("Los Angeles", "New York")
  graph.removeVertex("Aspen")
  console.log(graph)
  
  //notice all the extra work we did not need to do in original solution -- think
  //note --> can filter an array to not include something and will just include everything if not in there