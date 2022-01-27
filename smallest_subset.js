function smallestSub(arr){
  
    arr.sort((a,b) => {
      return b - a
    })
    
    let total = 0
    for(i = 0; i < arr.length; i++){
      total += arr[i]
    }
    let subSetB = []
    let subSetA = []
    let sum = 0
    for(let j = 0; j < arr.length; j++){
      if(sum < total){
        total -= arr[j]
        sum+= arr[j]
        subSetA.unshift(arr[j])
      }
      else{
        subSetB.unshift(arr[j])
      }
    }
    
    return subSetA
  }
  
  
  
  console.log(smallestSub([1, 2, 13, 10, 5]))