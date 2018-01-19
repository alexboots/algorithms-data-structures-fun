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

// If more than one letter has changed, we know more than one edit has taken place
const checkForLetterDifferences = (string1, string2) => {
  const string1Array = string1.split('')
  const string2Array = string2.split('')
  const differentLetters = []

  string1Array.forEach((letter, index) => {
    if(!string2Array.includes(letter)) {
      differentLetters.push(letter)
    }
  })

  return differentLetters.length <= 1
}

export const checkEditCount = (string1, string2) => {
  return checkForLetterDifferences(string1, string2)
}
