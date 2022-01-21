function averagePair(arr, avg){
  
    let left = 0
    let right = arr.length -1
    // add whatever parameters you deem necessary - good luck!
    
    while(left < arr.length -2){
      if((arr[left] + arr[right]) / 2 < avg){
        left += 1
      }
      if((arr[left] + arr[right]) / 2 > avg){
        right -= 1
      }
      if((arr[left] + arr[right]) / 2 === avg){
        return true
      }
    }
    return false
  }
  
  
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))