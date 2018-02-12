// Determine if a string has all Unique characters
export function isUnique(string) {
  let lettersChecked = []

  // some() will break when return true; 
  // every() will break when return false;

  return string.split('').every((letter) => {
    const isLetterUnique = !lettersChecked.includes(letter)
    lettersChecked.push(letter)

    return isLetterUnique
  })
}

/* 
  Time complexity is 0(n) where n is the lengh of the string.
*/

// 'oh snap es6 introduced sets' solution (much faster÷)
export function isUnique_usingSet(string) {
  let set = new Set(string)
  return set.size === string.length
}

