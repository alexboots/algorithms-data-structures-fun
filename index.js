import { isUnique } from './1-arrays-and-strings/1.1-isUnique'
import { isPermutation } from './1-arrays-and-strings/1.2-isPermutation'
import { URLify } from './1-arrays-and-strings/1.3-URLify'
import { palindromePermutation } from './1-arrays-and-strings/1.4-palindromePermutation'
import { checkEditCount } from './1-arrays-and-strings/1.5-checkEditCount'

import { palindromes } from './1-arrays-and-strings/test-data'

/* Arrays and Strings */
/* ------------------ */
// problems:  p102
// solutions: p205

// // _ 1.1 _______
// console.log('isUnique | true', isUnique('abcdefh'));
// console.log('isUnique | false', isUnique('abcdefhcgh'));

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

// _ 1.5 _______

[
  ['appple', 'aple'],
  ['pale', 'ple'],
  ['pales', 'pale'],
  ['pale', 'bale'],
  ['pale', 'bake']
].forEach((words) => {
  console.log('words', words);
  console.log(checkEditCount(words[0], words[1]));
})

