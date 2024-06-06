// index.test.js
const { expect } = require('chai');
const index = require('./index');

describe('index.js', () => {
  it('should output text', () => {
    const output = index();
    expect(output).to.be.a('string');
    // Add additional assertions as needed
  });
});
