const chai = require('chai');
const sinon = require('sinon');
const services = require('../services');
const model = require('../model');

const { expect } = chai;

describe('services.', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return results from store if number exists', async () => {
    sinon.stub(model, 'resultExists').returns(true);
    sinon.stub(model, 'getResults').returns(['1ae', '1be', '1ac']);
    const results = await services.convertPhoneNumber('1234567890');
    expect(results).to.deep.equal(['1ae', '1be', '1ac']);
  });
});
