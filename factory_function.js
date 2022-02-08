const wizardFunctions = {
    attack() {
       return 'attacking with ' + this.weapon //knows the weapon because passed in as an argument
     }
 }
 
 
 function createWiz(name, weapon){
   newWizard = Object.create(wizardFunctions)
   //creates a link between wizardFunctions and the new wizard created
   //above demonstrates prototypal inheritance 
   newWizard.name = name
   newWizard.weapon = weapon
   return newWizard
 }
 
 const wiz = createWiz("josh", "Wand")
 const wiz2 = createWiz("steve", "Magic")
 
 console.log(wiz.attack())
 console.log(wiz2.attack())