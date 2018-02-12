// Given two strings check, check if the 2nd string is `one edit` or `zero edits` away from the first
// If more than one edit away, return false
// Three possible string manipulation things are: 
//  1) insert character
//  2) replace character
//  3) remove character

// Book solution
// includes() (used above) is an expensive operation, 
// doing a compare on chars is cheaper and renders includes() not needed
export const checkEditCount_efficient = (string1, string2) => {
  const oneEditAway = (first, second) => {
    if(first.length === second.length) {
      return checkOneEditViaReplace(first, second)
    } else if (first.length + 1 === second.length) {
      return oneEditInsert(first, second)
    } else if (first.length - 1 === second.length) {
      return oneEditInsert(second, first)
    }
    return false
  }

  const checkOneEditViaReplace = (first, second) => {
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
    let index1 = 0
    let index2 = 0
    let stringPassesCheck = true

    while(index2 < longer.length && index1 < shorter.length) {
      // if letters at this index differ
      if(shorter[index1] !== longer[index2]) {
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

  return oneEditAway(string1, string2)
}
