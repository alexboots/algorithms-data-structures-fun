// Test data
import { 
  palindromes, 
  editCheckStrings, 
  pixelArray_3x3, 
  pixelArray_4x4,
  pixelArray_5x5,
  pixelArray_6x6
} from './1-arrays-and-strings/test-data'

import { numbersArray } from './search-stuff/test-data'


// Chapter 1 

import { isUnique, isUnique_usingSet } from './1-arrays-and-strings/1.1-isUnique'
import { isPermutation } from './1-arrays-and-strings/1.2-isPermutation'
import { URLify } from './1-arrays-and-strings/1.3-URLify'
import { palindromePermutation, simpler_palindromePermutation } from './1-arrays-and-strings/1.4-palindromePermutation'
import { checkEditCount, checkEditCount_simpler } from './1-arrays-and-strings/1.5-checkEditCount'
import { stringCompression } from './1-arrays-and-strings/1.6-stringCompression'
import { rotateImage } from './1-arrays-and-strings/1.7-rotateImage'
import { isRotation } from './1-arrays-and-strings/1.9-isRotation'

// Trying stuff
import { binarySearch } from './search-stuff/binarySearch'

/* Arrays and Strings */
/* ------------------ */
// problems:  p102
// solutions: p205

// // _ 1.1 _______
// console.log('isUnique | true', isUnique('abcdefh'));
// console.log('isUnique | false', isUnique('abcdefhcgh'));
// console.log('isUnique_usingSet | true', isUnique_usingSet('abcdefh'));
// console.log('isUnique_usingSet | false', isUnique_usingSet('abcdefhcgh'));


// console.log('\n\n');

// // _ 1.2 _______
// console.log('isPermutation | false', isPermutation('abcde', 'fghijk'));
// console.log('isPermutation | true', isPermutation('abcde', 'debca'));

// console.log('\n\n');

// // _ 1.3 _______
// console.log('URLify', URLify('hello some url'));

// console.log('\n\n');

// // _ 1.4 _______
// palindromes.forEach((palindrome) => {
//   console.log('palindromePermutation (of Tact coa)', palindromePermutation(palindrome));
// })

// palindromes.forEach((palindrome) => {
//   console.log('palindromePermutation (of Tact coa)', simpler_palindromePermutation(palindrome));
// })

// _ 1.5 _______

// editCheckStrings.forEach((words) => {
//   console.log('words', words);
//   console.log(checkEditCount(words[0], words[1]));
// })

editCheckStrings_simpler.forEach((words) => {
  console.log('words', words);
  console.log(checkEditCount(words[0], words[1]));
})

// _ 1.6 _______
// console.log(stringCompression('hellllllllo'))

// _ 1.6 _______

// console.log(rotateImage(pixelArray_3x3));
// console.log(rotateImage(pixelArray_4x4));
// console.log(rotateImage(pixelArray_5x5));
// console.log(rotateImage(pixelArray_6x6));

// _ 1.9 _______

// console.log(isRotation('waterbottle', 'erbottlewat'));
// console.log(isRotation('waterbottle', 'erbotlewatt'));
// console.log(isRotation('aaata', 'aataa'));
// console.log(isRotation('hello', 'heelo'));


// Trying stuff
// console.log(binarySearch(numbersArray, 3))
