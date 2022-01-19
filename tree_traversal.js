class Node {
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null
    }
    
    insert(val){
      let newNode = new Node(val)
      
      if(!this.root){
        this.root = newNode
        return this
      }
      
      // else if (this.root.value > val){ //if the root val is greater than go left
      //   if(!this.root.left){
      //     this.root.left = newNode
      //     return this
      //   }
        
        else {
          
          let current = this.root
          while(true){
            if(current.value > val){
              if(current.left === null){
                current.left = newNode
                return this
              }
              else {
                current = current.left
              }
            }//end of first if block
            
            else if(current.value < val){
              if(current.right === null){
                current.right = newNode
                return this
              }
              else{
                current = current.right
              }
            }
            else{
              return false
            }
          }//end of while loop
          
        }//end of else 
        
  //note --> we had an if statement previously that was throwing off our entire while loop
    }
    bfs(){
      let node = this.root
      let data = []
      let queue = []
      
      queue.push(node)
      while(queue.length){
        //note -- zero is falsy in this case 
        node = queue.shift()
        data.push(node)
        if(node.left){
          queue.push(node.left)
          }
          
          if(node.right){
            queue.push(node.right)
          }
        }
        
      return data.map((branch) => branch.value)
    }
    dfsPreOrder(){
      let current = this.root
      let data = []
      function traverse(node){
        data.push(node)
        if(node.left){
          traverse(node.left)
        }
        if(node.right){
          traverse(node.right)
        }
        return data
      }
      return traverse(current).map((branch) => branch.value)
      // traverse(current)
      // return data
    }
    
    dfsPostOrder(){
      let current = this.root
      let data = []
      function traverse(node){
        if(node.left){
          traverse(node.left)
        }
        if(node.right){
          traverse(node.right)
        }
        data.push(node)
        return data
      }
      return traverse(current).map((branch) => branch.value)
    }
  }
