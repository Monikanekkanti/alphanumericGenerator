const services = require('./services');

const controller = {
  async convertToAlphaNumeric(phoneNumber) {
    try {
      if (!phoneNumber || isNaN(Number(phoneNumber)) || phoneNumber.length < 7 || phoneNumber.length > 10
        || (phoneNumber.length > 7 && phoneNumber.length < 10)) {
        throw new Error('Invalid PhoneNumber');
      }
      const numbers = await services.convertPhoneNumber(phoneNumber);
      return {
        total: numbers.length,
        numbers,
      };
    } catch (error) {
      throw error;
    }
  }
};

module.exports = controller;