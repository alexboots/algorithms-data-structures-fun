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
  console.log('newRowShift', newRowShift)

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