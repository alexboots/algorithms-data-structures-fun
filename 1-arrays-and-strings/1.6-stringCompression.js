// If a string can be represented by number or letters, and be smaller than the orig string
// return that. Eg: aabbcc would return a2b2c2

export const stringCompression = (string) => {
  const letterCount = {}
  let compressedString = ''

  string.split('').forEach((letter) => {
    if(letterCount[letter])  {
      letterCount[letter]++
    } else {
      letterCount[letter] = 1
    }
  })

  for(let letter in letterCount) {
    compressedString += letter + letterCount[letter]
  }

  return compressedString.length > string.length ? string : compressedString
}
