function accum(s) {
    let word = s.toUpperCase()
    let newWord = ""
    for (let i = 0; i < word.length; i++){
      let count = 0
      let addition = word[i]
      newWord += addition
      while(count < i){
        newWord += addition.toLowerCase()
        count++
      }
      if(i !== word.length -1){
            newWord += "-"
      }
    }
    
    return newWord
  }
  
  console.log(accum("abc"))