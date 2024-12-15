/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const parseNumber = (input) =>
    typeof input === 'string' ? Number(input.replaceAll(" ", "")) : input;

  firstNumber = parseNumber(firstNumber);
  secondNumber = parseNumber(secondNumber);
  return firstNumber + secondNumber;
};
