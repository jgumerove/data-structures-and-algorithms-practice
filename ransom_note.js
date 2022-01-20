function ransomNote(note, magazine){
    if (magazine.length < note.length){
      return false 
    }
    frequencyTrackerNote = {}
    frequencyTrackerMagazine = {}
    for(const element of note){
      if(!frequencyTrackerNote.hasOwnProperty(element)){
        frequencyTrackerNote[element] = 0
        frequencyTrackerNote[element]++
      }
      else{
        frequencyTrackerNote[element]++
      }
    }
    
    for (const element of magazine){
      if(!frequencyTrackerMagazine.hasOwnProperty(element)){
        frequencyTrackerMagazine = 0
        frequencyTrackerMagazine++
      }
      else{
        frequencyTrackerMagazine++
      }
    }
    
    for(const key in frequencyTrackerMagazine){
      if(!frequencyTrackerNote.hasOwnProperty(key)){
        return false
      }
      if(frequencyTrackerMagazine[key] !== frequencyTrackerNote[key]){
        return false
      }
    }
    return true
  }
  
  console.log(ransomNote("a", 'ab'))