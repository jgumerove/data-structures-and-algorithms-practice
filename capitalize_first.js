function capitalize(arr){
    return arr.map((word, idx) => {
          //return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          if(idx === 1){
            return word
          }
          
          if(word[0].toUpperCase() === word[0]){
            return //word.charAt(0).toLowerCase() + word.slice(1)
          }
          
          else {
            return word[0].toUpperCase() + word.slice(1)
          }
          
      }).join("")
    }