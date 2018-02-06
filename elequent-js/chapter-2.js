export const triangle = () => {
  for(let i = 0, str = ''; i <= 7; i++) {
    str += '#'
    console.log(str)

  }
}

// Write a program that uses console.log to print all the numbers from 
// 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" 
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// "FizzBuzz", for numbers that are divisible by both 3 and 5
export const fizzBuzz = () => {
  for(let i = 1; i <= 100; i++) {
    if((i % 5 === 0) && (i % 3 === 0)) {
      console.log('FizzBuzz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i)
    }
  }
}

export const chessBoard = (size) => {
  if(!size) {
    console.log("please provide a board size");
  }
  const zeroIndexSize = size - 1
  const board = []

  for(let i = 0; i <= zeroIndexSize; i++) {
    board[i] = []
    for(let z = 0; z <= zeroIndexSize; z++) {
      if(z % 2 === 0) {
        board[i].push('#')
      } else {
        board[i].push(' ')
      }
    }  
    console.log(board[i])
  }
}

