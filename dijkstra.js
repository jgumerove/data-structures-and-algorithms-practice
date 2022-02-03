class WeightedGraph {
    constructor(){
      this.adjacencyList = {}
    }
    
    addVertex(vertex){
      if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
      }
    }
    
    addEdge(vertex1, vertex2, weight){
      this.adjacencyList[vertex1].push({node: vertex2, weight: weight})
      this.adjacencyList[vertex2].push({node: vertex1, weight: weight})
    }
      removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((element) => element.node !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((element) => element.node !== vertex1)
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = []
    }
    enqueue(val, priority) {
      this.values.push({val, priority})
      this.sort()
    }
    
    dequeue() {
      return this.values.shift()
    }
    
    sort() {
      this.values.sort((a, b) => a.priority - b.priority)
    }
  }
  
  //now need to worry not only about storing the edge itself --> but also its value 
  
  let graph = new WeightedGraph()
  graph.addVertex("A")
  graph.addVertex("B")
  graph.addVertex("C")
  graph.addEdge("A", "B", 9)
  graph.addEdge("A", "C", 5)
  graph.addEdge("B", "C", 7)
  let priorityQ = new PriorityQueue()
  //graph.removeEdge("A", "C")
  console.log(graph.adjacencyList)
  console.log(priorityQ)
  //note --> now with removing very similar --> but need to remove an object