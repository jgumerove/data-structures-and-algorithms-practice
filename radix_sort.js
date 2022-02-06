function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  }
  
  getDigit(12345, 0); // 5
  getDigit(12345, 1); // 4
  getDigit(12345, 2); // 3
  getDigit(12345, 3); // 2
  // console.log(getDigit(12345, 4)); // 1
  // console.log(getDigit(12345, 5)); // 0
  //notice what the zero position is -- the right most 
  //could convert to a string and then access the number that you want via index
  //note --> that can also represent places by power of ten
  
  
  function digitCount(num){
    return num.toString().length
  }
  
  
  
  // digitCount(1); // 1
  // console.log(digitCount(25)); // 2
  // console.log(digitCount(314)); // 3
  // console.log(digitCount(0)); // 1
  
  
  function mostDigits(nums){
    return Math.max.apply(null, (nums.map((num) => digitCount(num))))
  }
  
  
  // console.log(mostDigits([1234, 56, 7])); // 4
  // console.log(mostDigits([1, 1, 11111, 1])); // 5
  // console.log(mostDigits([12, 34, 56, 78])); // 2
  
  //notice how he used a for loop and declared a maxDigits variable in his solution 
  
  function radixSort(nums){
   let maxDigitCount = mostDigits(nums)
   for(let k = 0; k < maxDigitCount; k++){
     let digitBuckets = Array.from({length: 10}, () => [])//Array(10).fill([])
     for(let i = 0; i < nums.length; i++){
       digitBuckets[getDigit(nums[i], k)].push(nums[i])
     }
     nums = digitBuckets.flat(Infinity) //[].concat(...digitBuckets)
   }
   return nums
  }
  
  console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))