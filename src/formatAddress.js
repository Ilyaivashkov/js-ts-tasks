/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return ({ street = '', house = '', apartment = '', city = '', postalCode = '', country = '' }) => 
      [street, house, apartment, city, postalCode, country]
          .filter(Boolean)
          .join(', ');
};
