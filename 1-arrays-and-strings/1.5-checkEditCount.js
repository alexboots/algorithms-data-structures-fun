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


// Book solution #1
// includes() (used above) is an expensive operation, 
// doing a compare on chars is cheaper and renders includes() not needed
export const checkEditCount_simpler = (string1, string2) => {
  const oneEditAway = (first, second) => {
    if(first.length === second.length) {
      return oneEditReplace(first, second)
    } else if (first.length + 1 === second.length) {
      return oneEditInsert(first, second)
    } else if (first.length - 1 === second.length) {
      return oneEditInsert(second, first)
    }
    return false
  }

  const oneEditReplace = (first, second) => {
    let foundDifference = false
    for(let i = 0; i < first.length; i++) {
      if(first[i] !== second[i]) {
        if(foundDifference) {
          return false
        } else {
          foundDifference = true
        }
      }
    }
    return true
  }

  // Check to see if you can insert a letter into string1 to make string2
  const oneEditInsert = (shorter, longer) => {
    let index1, index2 = 0
    while(index2 < shorter.length && index1 < longer.length) {
      // if letters at this index differ
      if(longer[index1] !== shorter[index2]) {
        // and the index's we are at are different, there have been more than one insertions
        if(index1 !== index2) {
          return false
        } 
        // update only one index so we jump ahead in one string 
        // so the above check fails if the two strings differ a second time
        // :: abc => abEc will be fine :: abc => abEDc will break as the 2'nd comparison fails
        index2++
      } else {
        index1++
        index2++
      }
    }
    return true
  }
}
