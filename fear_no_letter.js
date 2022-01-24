function fearNoLetter(str) {
    let pointer1 = 0
    let pointer2 = 1
    
    while(pointer2 < str.length){
      let charCode1 = str[pointer1].charCodeAt(0)
      let charCode2 = str[pointer2].charCodeAt(0)
      if(charCode2 !== (charCode1 + 1)){
        return String.fromCharCode(charCode1 + 1)
      }
      pointer1++
      pointer2++
    }
  }
  console.log(fearNoLetter("abcdefh"));