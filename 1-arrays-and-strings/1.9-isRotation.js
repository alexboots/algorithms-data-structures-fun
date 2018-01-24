// using only one call to isSubstring


export const isRotation = (str1, str2) => {
  const arr1 = str1.split('').sort()
  const arr2 = str2.split('').sort()
  
  if(arr1.length !== arr2.length) {
    return false
  }

  const isSame = arr1.every((element, index) => {
    return element === arr2[index]
  })  

  return isSame
}