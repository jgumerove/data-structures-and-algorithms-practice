function timeConversion(s){
    let amPm = s.charAt(8);
    let militaryHour = "";
    
    if(amPm === "A"){
      if(s.substring(0,2) === "12"){
        militaryHour = "00"
      }
      else {
        militaryHour = s.substring(0,2) //do not have to worry about 03 senario than 
      }
    }
    else {
      if(s.substring(0, 2) == "12"){
        militaryHour = s.substring(0,2)
      }
      else{
        militaryHour = parseInt(s.substring(0, 2), 10) + 12 //do not have to worry then about the substring having zero
      }
    }
    return militaryHour + s.substring(2, 8)
  }
  
  console.log(timeConversion("03:02:45AM"))