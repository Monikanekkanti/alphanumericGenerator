const chai = require('chai');
const sinon = require('sinon');
const services = require('../services');
const controller = require('../controller');

const { expect } = chai;

describe('controller.', () => {
  describe('Validate number passed', () => {
    const errorMessage = 'Invalid PhoneNumber';
    it('Should throw error if string is not a number', async () => {
      let response;
      try {
        response = await controller.convertToAlphaNumeric('asdf123');
      } catch (err) {
        response = err;
      }
      expect(response.message).to.equal(errorMessage);
    });

    it('Should throw error if string is less than 7 characters', async () => {
      let response;
      try {
        response = await controller.convertToAlphaNumeric('123456');
      } catch (err) {
        response = err;
      }
      expect(response.message).to.equal(errorMessage);
    });

    it('Should throw error if string is greater than 7 characters and less than 10', async () => {
      let response;
      try {
        response = await controller.convertToAlphaNumeric('12345678');
      } catch (err) {
        response = err;
      }
      expect(response.message).to.equal(errorMessage);
    });

    it('Should throw error if string is greater than 10 characters', async () => {
      let response;
      try {
        response = await controller.convertToAlphaNumeric('12345678901');
      } catch (err) {
        response = err;
      }
      expect(response.message).to.equal(errorMessage);
    });

    it('Should throw not throw error if string length is 10 characters', async () => {
      let response;
      try {
        response = await controller.convertToAlphaNumeric('1234567');
      } catch (err) {
        response = err;
      }
      expect(response.message).to.be.an('undefined');
      expect(response.total).to.equal(5119);
    });
  });

  describe('successful response', () => {
    afterEach(() => {
      sinon.restore();
    });
  });
});
