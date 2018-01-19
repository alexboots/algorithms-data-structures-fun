// Given two strings check, check if the 2nd string is `one edit` or `zero edits` away from the first
// If more than one edit away, return false
// Three possible string manipulation things are: 
//  1) insert character
//  2) replace character
//  3) remove character
/* 

pale, ple
pales, pale
pale, bale
pale, bake

*/

// 2nd string must within 1 length of original
const checkForStringLengthDifference = (string1, string2) => {
  if(string2.length === string1.length ||
     string2.length === string1.length + 1 || 
     string2.length === string1.length - 1) {
    return true
  } else {
    return false
  }
}
// If more than one letter has changed, we know more than one edit has taken place
const checkForLetterDifferences = (string1, string2) => {
  const string1Array = string1.split('')
  const string2Array = string2.split('')
  const differentLetters = []

  const longerStrong  = string1Array.length > string2Array.length ? string1Array : string2Array
  const shorterString = string1Array.length > string2Array.length ? string2Array : string1Array

  longerStrong.forEach((letter, index) => {
    if(!shorterString.includes(letter)) {
      differentLetters.push(letter)
    }
  })

  return differentLetters.length <= 1
}

export const checkEditCount = (string1, string2) => {
  const oneEditCount = checkForStringLengthDifference(string1, string2) && checkForLetterDifferences(string1, string2)
  return oneEditCount
}
