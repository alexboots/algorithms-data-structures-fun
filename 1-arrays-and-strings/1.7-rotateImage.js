// Rotate an image represented by NxN matrix of pixels
// Input:
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]

// Output: 
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// [
//   [a,b,c,d],
//   [e,f,g,h],
//   [i,j,k,l]
//   [m,n,p,q]
// ]

// [
//   [m,i,e,a],
//   [n,j,f,b],
//   [p,k,g,c]
//   [q,l,h,d]
// ]

// Position math: 
// shift by (width - 1)
// difference between shifts is (width - 1)
// 2
// 4
// 6

// 7
// 9
// 11

// 12
// 14
// 16

// --
// 3
// 6
// 9
// 12

// 14
//
//
//
// --


const calculateCellPosition = (value, matrixCellCount) => {
  if(value >= matrixCellCount) {
    return calculateCellPosition(value - matrixCellCount, matrixCellCount)
  } else {
    return value
  }
}

const getRowAndCell = (newCellPosition, matrixWidth, row=0) => {
  if(newCellPosition > matrixWidth - 1) {
    return getRowAndCell(newCellPosition - matrixWidth, matrixWidth, row += 1)
  } else {
    return [row, newCellPosition]
  }
}

export const rotateImage = (pixelMatrix) => {
  const matrixWidth =  pixelMatrix[0].length 
  const matrixCellCount = matrixWidth * matrixWidth
  let count = 0
  const increment = matrixWidth - 1
  const rotatedMatrix = [...Array(matrixWidth)].map(() => [...Array(matrixWidth)])

  let newCellPosition
  let rowAndCell

  let currentPosition = 0
  let shiftCellBy = increment
  let newRowShift = matrixWidth - 2

  pixelMatrix.forEach((row, rowIndex) => {
    row.forEach((pixel, colIndex) =>  {
      newCellPosition = calculateCellPosition(currentPosition + shiftCellBy, matrixCellCount)

      rowAndCell = getRowAndCell(newCellPosition, matrixWidth)
      rotatedMatrix[rowAndCell[0]][rowAndCell[1]] = pixel

      if(colIndex + 1 === matrixWidth) {
        shiftCellBy += newRowShift
      } else {
        shiftCellBy += increment
      }

      currentPosition += 1
    })
  })

  return rotatedMatrix
}


// easier to read code++
export const rotateImage_book = (matrix) => {
  if(matrix.length === 0 || matrix.length !== matrix[0].length) { return 'why are you even trying to fool give me some gosh darn data this is preposterous'}

  let size = matrix.length

  for(let layer = 0; layer < Math.floor(size / 2); layer++) {
    let first = layer
    let last = size - 1 - layer

    for(let i = first; i < last; i++) {
      let offset = i - first
      let top = matrix[first][i] // save top

      // left => top
      matrix[first][i] = matrix[last - offset][first]

      // bottom => left 
      matrix[last - offset][first] = matrix[last][last - offset]

      // right => bottom
      matrix[last][last - offset] = matrix[i][last]

      // top => right
      matrix[i][last] = top // right = saved top
    }
  }
  

  return matrix
}
