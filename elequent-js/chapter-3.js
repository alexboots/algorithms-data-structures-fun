export const minimum = (numberOne, numberTwo) => {
  if(numberOne === numberTwo) return 'numbers are equal'
  
  if(numberOne < numberTwo) {
    return numberOne
  } else {
    numberTwo
  }
}

export const isEven = (number) => {
  const absoluteNumber = Math.abs(number)
  console.log('absoluteNumber', absoluteNumber);
  if(absoluteNumber === 1) {
    return false
  } else if(absoluteNumber === 0) {
    return true
  } else {
    return isEven(absoluteNumber - 2)
  }
}
