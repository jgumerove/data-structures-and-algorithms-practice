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
  // tree.root = new Node(10)
  // tree.root.right = 11
  //note the above is wrong --> need to declare a newNode
  // tree.root.right = new Node(15)
  // tree.root.left = new Node(7)
  // tree.root.left.left = new Node(3)
  // tree.root.left.right = new Node(8)
  //console.log(tree)
