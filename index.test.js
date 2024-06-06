// Import the module you want to test
const { add, subtract } = require('./index');
const  {expect}  = require('@jest/globals');

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toEqual(2);
  });
});
