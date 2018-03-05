 
// using only one call to isSubstring
// rotation = if string is 'rotated' around a beginning or end. 
export const isRotation = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false
  }
         // V isSubstring
  return (str1 + str1).includes(str2)
}