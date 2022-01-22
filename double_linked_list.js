class Node {
    constructor(val){
      this.val = val
      this.next = null
      this.prev = null
    }
  }
  
  class DoublyLinkedList {
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    push(val){
      let newNode = new Node(val)
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }
      else{
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      }
      this.length++
      return this
    }
    pop(){
      if(this.length === 0){
        return undefined 
      }
      let poppedNode = this.tail 
      if(this.length === 1){
        this.head = null
        this.tail = null
      }
      else{
        //this.tail.prev = null
        this.tail = poppedNode.prev
        this.tail.next = null 
        poppedNode.prev = null
        //so cannot grab the popped node and continue to traverse 
        //this.tail.p
      }
      this.length--
      return poppedNode
    }
    shift(){
      if(!this.head){
        return undefined 
      }
      let oldHead = this.head
      if(this.length === 1){
        this.head = null
        this.tail = null 
      }
      else {
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null
      }
      this.length--
      return oldHead
    }
    unshift(val){
      let newNode = new Node(val)
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }
      else {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      }
      this.length++
      return newNode
    }
    get(index){
      if(index < 0 || index > this.length){
        return null
      }
      let count = 0
      let current = this.head
      if(index <= (this.length / 2)){
      console.log("working from beginning")
      while(count !== index){
        current = current.next
        count++
       }
     }
     //notice --> did not need to write this logic out in the if statement --> could have just wrote else 
     else {
       console.log("working from end")
       count = this.length 
       current = this.tail
       while(count !== index){
         current = current.prev
         count--
       }
     }
     
      return current
    }
    set(index, val){
      if(!this.get(index)){
        return null
      }
      let currentVal = this.get(index)
      currentVal.val = val
      return this
    }
    insert(index, val){
      if(index < 0 || index > this.length){
        return false
      }
     if(index === 0){
       return !!this.unshift(val)
     }
     if(index === this.length){
       return !!this.push(val)
     }
     let newNode = new Node(val)
     let beforeNode = this.get(index - 1)
     let afterNode = beforeNode.next
     beforeNode.next = newNode
     newNode.prev = beforeNode
     newNode.next = afterNode
     afterNode.prev = newNode
     this.length++
     return true
     //notice all the chaning 
    }
    remove(index){
      if(index < 0){
        return new Error ("Invalid Entry") //or false
      }
      
      if(index >= this.length){
        return null //or false
      }
      
      if(index === 0){
        return this.shift()
      }
      
      if(index === this.length -1){
        return this.pop()
      }
      
      else {
        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removedNode.next = null
        removedNode.prev = null
        //set to null to clean up code (and get rid of "loose ends ")
        this.length --
        return removeNode
        //notice how before (in previous example) --> he used this.get(index -1) && this.getIndex(index) to create two variables and make it easier to understand
      }
  
    }
    
  }
  
  
  let double = new DoublyLinkedList()
  double.push("zero")
  double.push("one")
  double.push("two")
  double.push("three")
  double.push("four")
  //console.log(double.insert(0, "after the zero"))
  console.log(double.remove(3))
  console.log(double)
  