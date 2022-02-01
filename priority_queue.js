class PriorityQueue {
    constructor(){
      this.values = []
    }
    
   enqueue(val, priority){
     let newNode = new Node(val, priority)
     this.values.push(newNode)
     this.bubbleUp()
   }
   
   bubbleUp(){
     let idx = this.values.length - 1 
     const element = this.values[idx]
     while(idx > 0) {
       let parentIdx = Math.floor((idx - 1) /2)
       let parent = this.values[parentIdx]
       if(element.priority >= parent.priority){
         break
       }
       this.values[parentIdx] = element
       this.values[idx] = parent
       idx = parentIdx
     }
   }
   
   dequeue(){
     const min = this.values[0]
     const end = this.values.pop()
     if(this.values.length > 0){
       this.values[0] = end
       this.sinkDown()
     }
     return min
   }
   
   sinkDown(){
      let idx = 0
      let length = this.values.length
      let element = this.values[0]
      while(true){
        let leftChildIdx = (idx * 2) + 1 
        let rightChildIdx = (idx * 2) + 2
        let leftChild, rightChild 
        let swap = null
        
        if(leftChildIdx < length){
          leftChild = this.values[leftChildIdx]
          if(leftChild.priority < element.priority){
            swap = leftChildIdx
            
          }
        }
        
        if(rightChildIdx < length){
          rightChild = this.values[rightChildIdx]
          if((swap === null && rightChild.priority < element.priority) ||(swap !== null && rightChild.priority < leftChild.priority)){
            
             swap = rightChildIdx
          }
        }
        if(swap === null) break
        this.values[idx] = this.values[swap]
        this.values[swap] = element
        idx = swap
      }
    }
   
  }
  
  class Node {
    constructor(val, priority){
      this.val = val
      this.priority = priority
    }
  }
  
  let ER = new PriorityQueue()
  ER.enqueue("common cold", 5)
  ER.enqueue("gunshot wound", 1)
  ER.enqueue("high fever", 4)
  ER.enqueue("broken arm", 2)
  ER.enqueue("glass in foot", 3)
  console.log(ER.dequeue())
  console.log(ER.dequeue())
  
  
  
  
  
  
  
  
  
  
  //note how give certain things priorities (can use either minimum or maximum values)
  //hospital example 
  //note why array is a bad data structure to use (in this case) -- compared to a heap 
  //could be implemented other ways 
  //heap is an abstract concept 
  //note --> aside from methods -- all we need structurally is a list of values 
  //hence the array
  //note --> with node class --> the value is not what we are using for comparison (we use the priority)
  //here we are going to use a min binary heap --> just to show variety 
  //lower values will get served first 
  //note we will use a comparison with the nodes 
  //note --> just altering binary heap code slightly