function longestSubString(str, k){
    let windowStart = 0
    let longestSubString = 0
    let frequencyTracker = {}
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
        if (!frequencyTracker.hasOwnProperty(str[windowEnd])){
          frequencyTracker[str[windowEnd]] = 0
        }
        
        frequencyTracker[str[windowEnd]] += 1
        
      while(Object.keys(frequencyTracker).length > k){
        frequencyTracker[str[windowStart]]--
        if(frequencyTracker[str[windowStart]] === 0){
          delete frequencyTracker[str[windowStart]]
        }
        windowStart++
        console.log(frequencyTracker)
      }
      longestSubString = Math.max(longestSubString, windowEnd - windowStart + 1)
    }
    return longestSubString
  }
  
  console.log(longestSubString('acccpbbebi', 3))