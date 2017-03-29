var should = require('should');
var add = require('./index');


describe('add', () => {
  it('1 + 2', () => {
    add(1, 2).should.be.equal(3);
  });
});