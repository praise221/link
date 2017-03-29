import {expect} from 'chai';

describe('Test app.js', function() {

  it('should be a id:app there.', function(){

    var jsdom = require("jsdom");

    jsdom.env({
          url: "http://localhost:8080/",
          scripts: ["http://code.jquery.com/jquery.js","http://localhost:8080/bundle.js"],
          done: function (errors, window) {
          var $ = window.$;
             //console.log($("#app").text());
		  expect($("#app").text()).to.equal('React ToDos AppCreateTaskActionmake React tutorialEditDeleteeat dinnerEditDelete');
          }
    });
  });
  
  it('all DIV there.', function(){

    var jsdom = require("jsdom");

    jsdom.env({
          url: "http://localhost:8080/",
          scripts: ["http://code.jquery.com/jquery.js"],
          done: function (errors, window) {
          var $ = window.$;
		     console.log("DIV:");
             console.log($("div").text());
          //expect($("div").text()).to.equal('React ToDos AppCreateTaskActionmake React tutorialEditDeleteeat dinnerEditDelete');
          },features: {
            FetchExternalResources: ["script"],
            ProcessExternalResources: ["script"],
            SkipExternalResources: false
        }  
    });
  });
  
  it('all DIV:app there.', function(){

    var jsdom = require("jsdom");

    jsdom.env({
          url: "http://localhost:8080/",
          scripts: ["http://code.jquery.com/jquery.js","http://localhost:8080/bundle.js"],
          done: function (errors, window) {
          var $ = window.$;
		     console.log("DIV#app:");
             console.log($("div#app").text());
          //expect($("div").text()).to.equal('React ToDos AppCreateTaskActionmake React tutorialEditDeleteeat dinnerEditDelete');
          }
    });
  });
    
});