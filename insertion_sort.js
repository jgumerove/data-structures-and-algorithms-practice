function insertionSort(arr){
  
    for(let i = 1; i < arr.length; i++){
      for(let j = i; j > 0; j--){
        if(arr[j] < arr[j -1]){
          let temp = arr[j -1]
          arr[j-1] = arr[j]
          arr[j] = temp
        }
        else{
          break
        }
      }
        console.log(arr)
    }
    return arr
  }
  console.log(insertionSort([3, 10, 77, 76, 10, 4]))