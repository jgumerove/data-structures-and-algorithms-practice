

class Node {
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class SinglyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0;
    }
    
    push(val){
      let newNode = new Node(val)
      if(!this.head){
        this.head = newNode 
        this.tail = this.head
      }
      else{
      this.tail.next = newNode
      this.tail = newNode
      }
      this.length++
      return this
    }
    
    pop(){
      if(!this.head){
        return undefined
      }
      let current = this.head
      let newTail = current
      while(current.next){
        newTail = current
        current = current.next
      }
      console.log(newTail.val)
      this.tail = newTail
      this.tail.next = null
      this.length--
      if(this.length === 0){
        this.head = null
        this.tail = null
      }
      //removing from the end is O(n) -- linear
      return current
    }
    shift(){
      if(!this.head){
        return undefined
      }
      
      let currentHead = this.head
      this.head = currentHead.next //(notice how you can use the properties on this like this.head.next //should be the same thing but cleaner) 
      this.length--
      if(this.length === 0){
        this.tail = null
      }//this line of code is not completely necessary but good to have 
      return currentHead 
      //notice how we are now not moving everything down 1 -- just reassinging values -- O(1)
    }
    unshift(val){
      let newNode = new Node(val)
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }
      else{
        let oldHead = this.head
        this.head = newNode
        this.head.next = oldHead
      }
      this.length++
      return this
    }
    get(index){
      if(index > this.length -1 || index < 0){
        return undefined
      }
      let count = 0 
      let nodeVal = this.head
      while(count < index){
        nodeVal = nodeVal.next
        count++
      }
      return nodeVal
    }
    
    set(index, newVal){
      /*if(index > this.length -1 || index < 0){
        return false
      }
      let count = 0 
      let nodeVal = this.head
      while(count < index){
        nodeVal = nodeVal.next
        count++
      }*/
      let foundNode = this.get(index)
      if(foundNode){
        foundNode.val = newVal
        return true
      }
      return false
    }
    insert(index, val){
      if(index < 0 || index > this.length){
        return false
      }
      if(index === this.length){
        this.push(val)
        return true
        //could do return !!this.push(val)
      }
      
      if(index === 0){
        this.unshift(val)
        return true
      }
      else{
        let nodeLeft = this.get(index -1)
        let newNode = new Node(val)
        let oldNext = nodeLeft.next
        nodeLeft.next = newNode
        newNode.next = oldNext
        this.length++
        return true
      }
    }
    
    remove(index){
      if(index >= this.length || index < 0){
        return undefined
      }
      
      if(index === this.length - 1){
        return this.pop()
      }
      
      if(index === 0){
        return this.shift()
      }
      
      else{
        let leftNode = this.get(index -1)
        let removedNode = leftNode.next
        leftNode.next = removedNode.next
        this.length--
        return removedNode
      }
      
    }
    reverse(){
      let node = this.head
      this.head = this.tail 
      this.tail = node 
      let next = null
      let prev = null
      for(let i = 0; i < this.length; i++){
        next = node.next
        node.next = prev
        prev = node 
        node = next 
      }
      //three varialbes keeping track of -- 1. node 2. previous 3. next
      //[100, 201, 250, 350, 999]
      //first time through --> node === this.head -- which is 100 // 201 then becomes next
      return this;
    }
    print(){
      let arr = []
      let current = this.head
      while(current){
        arr.push(`${current.val} -->`)
        current = current.next
      }
      arr.push(" null")
      console.log(arr)
    }
  }
  //notice --> can also say while the count does not equal
  //unshift adds to beginning
  //declare a variable newNode
  //oldhead
  //make the current head the next value
  
  let list = new SinglyLinkedList()
  list.push("HELLO")
  list.push("GOODBYE")
  list.push("!")
  list.push("<3")
  list.push(":)")
  list.push("$")
  //console.log(list.get(5))
  //console.log(list.set(5, "&&&"))
  //console.log(list.get(5))
  console.log("-----------------------")
  //console.log(list.insert(0, "ddfsfsdf"))
  //console.log(list.insert(0, "this is the 3 item"))
  //console.log(list.remove(2))
  console.log(list)
  console.log(list.reverse())
  list.print()