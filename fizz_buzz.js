function fizzBuzz(){
    let num = 0
    while(num <= 100){
      if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz")
        num++
        //continue 
      }
      else if(num % 3 === 0){
        num++
        console.log("Fizz")
        //continue
      }
      
      else if(num % 5 == 0){
        num++
        console.log("Buzz")
        //continue
      }
      else {
        console.log(num)
        num++
      }
      
    }
  }