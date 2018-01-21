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
//   [q,n,h,d]
// ]

// Position math: 
/* 

// first row
(width - 1) * ((rowIndex * colIndex) + 1)

// second row 
(width - 1) * (((rowIndex * colIndex) + 1) - 1)

// third row
(width - 1) * (((rowIndex * colIndex) + 1) - 2)

// third row
(width - 1) * (((rowIndex * colIndex) + 1) - 3)

*/

export const rotateImage = (pixelMatrix) => {
  const arrayWidth =  pixelMatrix[0].length 
  const arrayValuesCount = arrayWidth * arrayWidth

  const rotatedMatrix = []

  pixelMatrix.forEach((row, rowIndex) => {
    rotatedMatrix[rowIndex] = []
    row.forEach((pixel, colIndex) =>  {

      const newPosition = (Math.abs((arrayWidth - 1)) * ((rowIndex * colIndex + 1)) - (rowIndex + 1))
        console.log('newPosition', newPosition);
      // rotatedMatrix[rowIndex][colIndex] = pixel
    })
  })


  return rotatedMatrix
}