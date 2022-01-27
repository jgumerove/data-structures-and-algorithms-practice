function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total
  }
  
  console.log(addUpTo(3))
  
  function secondAddUp(n){
   return n * (n + 1) / 2
  }
  
  let t1 = performance.now()
  secondAddUp(10000000)
  let t2 = performance.now()
  console.log(`time elapsed in seconds ${(t2 - t1) / 1000} seconds`)