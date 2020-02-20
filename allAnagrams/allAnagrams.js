
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


function allAnagrams(string) {
  var result = {};

  function anagram(str, string) {
    if (string === '') {
      result[str] = 1;
    }

    for (var i = 0; i < string.length; i++) {
      anagram(str + string[i], string.slice(0, i) + string.slice(i + 1))
    }

  }
  anagram('', string)

  return Object.keys(result);
}

