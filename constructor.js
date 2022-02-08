function Elf(name, weapon) {
    this.name = name
    this.weapon = weapon
    //return this
}

let steve = new Elf("steve", "bow")
let joe = new Elf("joe", "sword")
console.log(steve)
console.log(joe)

const Elf1 = new Function('name', 'weapon',
//this is what constructor functions are 
`
this.name = name
this.weapon = weapon
`)

const brennan = new Elf1('brennan', `cannon`)
console.log(brennan)

//let us use new keyword and construct functions for us 
