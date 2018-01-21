// If a string can be represented by number or letters, and be smaller than the orig string
// return that. Eg: aabbcc would return a2b2c2

export const stringCompression = (string) => {
  const letterCount = {}
  const letters = []
  let compressedString = ''

  string.split('').forEach((letter) => {
    if(!letters.includes(letter)) {
      letters.push(letter)
      letterCount[`${letter}`] = 1
    } else {
      letterCount[`${letter}`] += 1
    }
  })

  letters.forEach((letter) => {
    compressedString += letter + letterCount[letter]
  })

  return compressedString.length > string.length ? string : compressedString
}