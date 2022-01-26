function plusMinus(arr) {
    // Write your code here
    let divider = arr.length
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
    for (const element of arr){
        if(element === 0){
            zeroCount++
        }
        if(element < 0){
            negativeCount++
        }
        if(element > 0){
            positiveCount++
        }
    }
    function ratio(n1, n2){
        let num = n1 / n2
        return num.toFixed(6)
    }
    let first = ratio(positiveCount, divider)
    let second = ratio(negativeCount, divider)
    let third = ratio (zeroCount, divider)
    console.log(first)
    console.log(second)
    console.log(third)
}

console.log(plusMinus([1, 2, 3, -1, 6, 0]))