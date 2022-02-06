//all elements that are contained in one or the other array (but not contained in both )
//first way below 
function symmDiff(arr1, arr2){
    let union = new Set(arr1.concat(arr2))
    //note --> could have also used the spread operator 
    /*for(const element of arr1){
      if(!union.includes(element)){
        union.push(element)
      }
    }
    for(const element of arr2){
      if(!union.includes(element)){
        union.push(element)
      }
    }*/
    
    let symmDiff = []
    
    for(const element of union){
      if(arr1.includes(element) && !arr2.includes(element)){
        symmDiff.push(element)
      }
      if(arr2.includes(element) && !arr1.includes(element)){
        symmDiff.push(element)
      }
    }
    return symmDiff
  }
  
  console.log(symmDiff([1, 2, 3, 5, 6, "josh"], [1, 2, 3, 4, 5]))
  //note --> could find the union by using se
  //what elements are contained in both
  //[1, 2, 3, 5, 6] [1, 2, 3, 4, 5]
  //note --> union of two [1, 2, 3, 4, 5, 6]
  
  //loop through both arrays and add elements to a new array called union if not repeated 
  //notice how he first created the uniion array 
  //loop through both
  //notice --> how he defines variables -- even if they are not completley necessary in his kid 
  //does above to make the code while he is coding (and for other people) --> less confusing 
  //nothing wrong with doing the above 
  //notice how he includes else if also to make his code less confusiong 
  