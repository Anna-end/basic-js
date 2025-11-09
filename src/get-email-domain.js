const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {
        throw new Error('Invalid email format');
    }
    
    return email.split('@')[1];
}

module.exports = {
  getEmailDomain
};
