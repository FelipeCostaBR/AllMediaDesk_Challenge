function CalculateInsideRoundBrackets(expression) {
  // find just the value inside of the round brackets and save into array
  const position1 = expression.indexOf('(')
  const position2 = expression.indexOf(')')
  const roundBracketsValue = expression.substring(position1 + 1, position2)
  const roundBracketsArray = roundBracketsValue.split(' ')

// convert string into number
  const numbersArray = roundBracketsArray.filter(value => Number(value))
  numbersArray.forEach((value, index) => numbersArray[index] = Number(value))
  
  let result = 0;
  roundBracketsArray.forEach(element => {
    if (element == '+') {
      result = numbersArray.reduce((acc, value) => acc + value)
    } else if (element == '-') {
      result = numbersArray.reduce((acc, value) => acc - value)
    } else if (element == '*') {
      result = numbersArray.reduce((acc, value) => acc * value)
    }
    else if (element == '/') {
      result = numbersArray.reduce((acc, value) => acc / value)
    }
  })

  return expression.replace(`(${roundBracketsValue})`, result)
}

function calculateString(str) {
  const valueArray = str.split(/[+-/*]/g);
  const operatorArray = str.match(/[+-/*]/g);

  // convert string into number
  valueArray.forEach((value, index) => valueArray[index] = Number(value))

  // delete white space
  operatorArray.forEach((value, index) => operatorArray[index] = value.trim())

  let currentTotal = valueArray[0];
  operatorArray.forEach((_, index) => {
    switch (operatorArray[index]) {
      case '+':
        currentTotal = currentTotal + valueArray[index + 1];
        break;
      case '-':
        currentTotal = currentTotal - valueArray[index + 1];
        break;
      case '*':
        currentTotal = currentTotal * valueArray[index + 1];
        break;
      case '/':
        currentTotal = currentTotal / valueArray[index + 1];
        break;
    }
  })
  return currentTotal;
}



function calculator(toCalculate) {
  let expression = toCalculate;

  if (expression.includes('(')) {
    let expressionWithoutBrackets = CalculateInsideRoundBrackets(expression)

    return calculateString(expressionWithoutBrackets)
  }
  return calculateString(expression)
}

console.log(calculator(' (5 + 8) * 3/8 +3'))
console.log(calculator('8 * 8 +3'))
