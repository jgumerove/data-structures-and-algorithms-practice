// let josh = {
//   name: "josh",
//   sing(){
//     return `${this.name} is singing`
//   }
// }
//note what would happen if it got more complicated
let josh = {
    name: "josh",
    talent: true,
    sing(){
      if(this.talent){
      return `${this.name} is singing`
      }
      // else {
      // return  `${this.name} cannot sing`
      // }
    }
  }
  let steve = {
    name: "steve"
  }
  
  console.log(josh.sing())
  // let steveSing = josh.sing.bind(steve)
  // console.log(steveSing())
  
  steve.__proto__ = josh
  
  console.log(steve.sing())