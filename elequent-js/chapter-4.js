 // range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end
export const range = (start, end, step = 1) => {
  const array = []

  for(let i = start; start < end ? i <= end : i >= end; i = i + step) {
    array.push(i)
  }

  return array
}

 // sum function that takes an array of numbers and returns the sum of these numbers 
export const sum = (array) => {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue)
}