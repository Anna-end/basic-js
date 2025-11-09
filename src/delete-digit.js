const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrFirst = n.toString().split('');
  
  let minNum = Math.min(...arrFirst.map(Number));
  let result = Number(arrFirst.filter(i => i > minNum).join(''));
  return result

}

module.exports = {
  deleteDigit
};
