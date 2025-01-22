/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function Number(num) {
    if (num < 2) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return function (start, end) {
    const number = [];
    start = Math.max(2, start);
    end = Math.min(end, highestNumber);
    for (let i = start; i <= end; i++) {
      if (Number(i)) {
        number.push(i);
      }
    }
    return number;
  };
};
