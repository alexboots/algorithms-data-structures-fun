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

  if(absoluteNumber === 1) {
    return false
  } else if(absoluteNumber === 0) {
    return true
  } else {
    return isEven(absoluteNumber - 2)
  }
}


export const countBs = (string) => {
  let countBs = 0
  string.split('').forEach((letter) => {
    if(letter === 'B') { countBs++ }
  })

  return countBs
}


export const countChar = (string, char) => {
  let count = 0
  for(let letter of string) {
    if(letter === `${char}`) count++
  }
  return count
}

