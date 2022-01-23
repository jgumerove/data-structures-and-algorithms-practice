function charCount(str){
    let result = {}
    let strLower = str.toLowerCase()
    for(let i = 0; i < strLower.length; i++){
      if(result.hasOwnProperty(strLower[i])){
        result[strLower[i]] += 1
      }
      else {
        result[strLower[i]] = 1
      }
    }
    return result
  }
  
  console.log(charCount("adgdsfsdfaaaAAA"))