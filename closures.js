// function callMeMaybe() {
//     //const callMe = "hi i am now here"
//     setTimeout(function() {
//       console.log(callMe)
//     }, 4000)
//     const callMe = "testing if works"
//   }

  //callMeMaybe()

  //note the above still works --> because we have already assigned callMe variable when function runs 

  function test(){
      let other = "josh"
      return function a(){
          return other
      }
  }

  //the above demonstration only works with certain callbacks

  //console.log(test()())

  const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1
        return "boom"
    }
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime,
        passTime
    }
  }

//   const ohno = makeNuclearButton()
//   console.log(ohno.totalPeaceTime(), ohno.totalPeaceTime())
//   console.log(ohno.passTime())

  let view

  function initialize(){
     let called = 0
     return function() {
         if (called > 0) {
             return
         }
         else{
             view = "something"
             called++
             console.log("view has been set")
         }
     }
  }

  const startOnce = initialize()
  startOnce()
  startOnce()
  console.log(view)