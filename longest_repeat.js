function longestRep(str){
    let start = 0
    let end = 1
    let longest = -Infinity 
    while(start < str.length){
      if(str[start] === str[end] && end < str.length){
        longest = Math.max(longest, (end - start) + 1) 
        console.log(longest)
        console.log(end, "the")
        end++
      }
      
      else{
        //console.log(str[start])
        start++
        console.log(start, "start")
      }
    }
    return longest
  }
  
  //'aabcbaaabbbb' 4
  
  console.log(longestRep('abbbbbcdegggg'))
  //console.log("pppppppppppp".length, "is")