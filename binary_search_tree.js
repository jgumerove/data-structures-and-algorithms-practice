class BinarySearchTree {
    constructor(){
      this.root = null
    }
    insert(value){
      let newNode = new Node(value)
      if(!this.root){
        this.root = newNode
        return this
      }
      else{
        let current = this.root 
        while(true){
          if(value === current.value){
            return "Not allowed"
          }
          if(value < current.value){
            if(!current.left){
              current.left = newNode
              return this 
            }
            else {
              current = current.left
            }
          };
          if(value > current.value){
            if(!current.right){
              current.right = newNode
              return this
            }
            else{
              current = current.right
            }
          }
        }
      }
    }
    search(value){
      if(!this.root){
        return false
      }
        if(this.root.value === value){
          return true
        }
        if(value > this.root.value){
          let current = this.root
          let found = false
          while(current && !found){
            if(current.value === value){
              return current
            }
            if(current.value < value){
              //current = current.right
              current.right ? current = current.right : found = true
            }
            if(current.value > value){
              //current = current.left
              current.left ? current = current.left : found = true
            }
            
          }
          //return false
        }
        if(value < this.root.value){
          let current = this.root
          let found = false
          while(current && !found){
            if(current.value === value){
              return current
            }
            
            if(current.value > value){
              //current = current.left
              current.left ? current = current.left : found = true
            }
            if(current.value < value){
            //current = current.right
            current.right ? current = current.right : found = true
            }
            //return false
          }
        }
        return false
      }
    //return false
  }
  
  class Node {
    constructor(value){
      this.value = value
      this.left = null
      this.right = null 
    }
  }
  
  
  let tree = new BinarySearchTree()
  tree.insert(10)
  tree.insert(5)
  tree.insert(2)
  tree.insert(13)
  tree.insert(14)
  //tree.insert(10)
  
  console.log(tree.search(13))
  //if number already in --> will hit infinite loop
  // tree.root = new Node(10)
  // tree.root.right = 11
  //note the above is wrong --> need to declare a newNode
  // tree.root.right = new Node(15)
  // tree.root.left = new Node(7)
  // tree.root.left.left = new Node(3)
  // tree.root.left.right = new Node(8)
  //console.log(tree)
  //notice how we messed up the first time 
  //note how we originally declared the value of the root
  //the root will be set to a node 
  //notice how long it can take to declare different levels above --> insert will fix this problem --> when we create this method 
  // console.log(tree.root.left.left)
  //not sure how to keep on going --> with the while loop use . notation 
  //notice --> how he nests if conditional statements --> this is allowed 
  //notice --> how we increase by declaring a variable outside the while loop equal to the value of this.root and increment it inside by calling left/right
  //note --> we do not need all his elses
  //note the toFixed() equation we used earlier 