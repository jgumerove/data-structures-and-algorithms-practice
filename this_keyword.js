
function importantPerson(){
  console.log(this.name)
}

const name = "sunny"
const obj1 = {
    name: "josh",
    importantPerson,
}


obj1.importantPerson()
importantPerson()