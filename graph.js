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
    depthFirstRecursive(start){
      let result = []
      let visited = {}
      let adjacencyList = this.adjacencyList
      function helper(vertex){
        if(!vertex){
          return null
        }
        visited[vertex] = true
        result.push(vertex)
        for (const element of adjacencyList[vertex]){
          if(!visited[element]){
            helper(element)
          }
        }
      }
      helper(start)
      return result
    }
    bfs(start){
      let q = [start]
      let result = []
      let visited = {}
      visited[start] = true
      while(q.length){
        let vertex = q.shift()
        result.push(vertex)
        this.adjacencyList[vertex].forEach((element) => {
          if(!visited[element]){
            visited[element] = true
            q.push(element)
            // this.adjacencyList[element].forEach((neighbor) => stack.push(neighbor))
          }
        }
        )
      }
      return result
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