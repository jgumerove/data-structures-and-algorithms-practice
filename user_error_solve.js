const logs = [
    { userId: 1, action: 'A'}, // A
    { userId: 2, action: 'B'},
    { userId: 1, action: 'B'},
    { userId: 1, action: 'C'},
    { userId: 1, action: 'C'},
    { userId: 10, action: 'T'},
];

function userErrors(arr){
  let error = "ABC"
  let usersArr = []
  let frequencyTracker = {}
  for(let i = 0; i < arr.length; i++){
  let identification = arr[i].userId
  let keyPress = arr[i].action
    if(!frequencyTracker.hasOwnProperty(identification)){
      frequencyTracker[identification] = ""
      frequencyTracker[identification] += keyPress
    }
    else{
      frequencyTracker[identification] += keyPress
    }  
  }
  for(const key in frequencyTracker){
    if(frequencyTracker[key].includes(error)){
      usersArr.push(parseInt(key))
    }
  }
  return usersArr
}
console.log(userErrors(logs))