require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text', function() {
    var VeryFirstDiv = require('../src/components/app.js');
    var myDiv = TestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'h1');

    assert.equal(divText.textContent, 'React ToDos App');
  });
});