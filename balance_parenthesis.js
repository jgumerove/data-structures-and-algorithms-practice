function balancingParentheses(string) {
    let missing = 0;
    let openings = 0;
  
    for (let i = 0; i < string.length; ++i) {
      if (string[i] === '(') {
        ++openings;
        //continue; --note do not need the continue statement if you use else if
      }
  
      else if (openings > 0) {
        --openings;
        console.log(string[i]) // )
      } else {
        ++missing;
      }
    }
  
    return missing + openings;
  }
  
  //console.log(balancingParentheses('(()())'))
  console.log(balancingParentheses('()))'))
  //console.log(balancingParentheses(')((((()))((())))()(()))(')) //2