//const xpath = require('../src/components/app.js');
import {expect} from 'chai';

describe('Test index.html', function() {
  
  it('should be a title there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//title', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('React ToDos App');
   	  } 
    });
  });
	
  it('should be a "myTitle" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	    
    done: (errors, window) => {
	   
	expect(window.document.evaluate('.//*[@id="app"]/div/h1', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('React ToDos App');
      } 
	 ,features: {
            FetchExternalResources: ["script"],
            ProcessExternalResources: ["script"],
            SkipExternalResources: false
	 }
    });
  });
	
  it('should be a input there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	   
	expect(window.document.evaluate('//*[@id="app"]/div/form/input', window.document,
          null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.getAttribute('placeholder')).to.equal('What do I need to do?');	
	expect(window.document.evaluate('//*[@id="app"]/div/form/input', window.document,
          null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.getAttribute('type')).to.equal('text');  
      } 
    });
  });


  it('should be a "Create" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	   
	expect(window.document.evaluate('.//*[@id="app"]/div/form/button', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Create');   	   
      } 
    });
  });
  
  it('should be a "table" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('TaskActionmake React tutorialEditDeleteeat dinnerEditDelete'); 	
   	  } 
    });
  });
  
  it('should be a "Thead" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/thead', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('TaskAction');
      } 
    });
  });
  
  it('should be a "tr" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/thead/tr', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('TaskAction');
      } 
    });
  });
	
  it('should be a "th[1]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/thead/tr/th[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Task');	
	  } 
    });
  });
	
  it('should be a "th[2]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/thead/tr/th[2]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Action');
	  } 
    });
  });
	
  it('should be a "tbody" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('make React tutorialEditDeleteeat dinnerEditDelete');
	  } 
    });
  });	
  
  it('should be a "tr[1]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('make React tutorialEditDelete');
	  } 
    });
  });		
		
  it('should be a "tr[1]/td[1]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[1]/td[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('make React tutorial');	
	  } 
    });
  });	
  
   it('should be a "Edit" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	   
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[1]/td[2]/button[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Edit');   	   
      } 
    });
  });
  
  it('should be a "Delete" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	   
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[1]/td[2]/button[2]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Delete');   	   
      } 
    });
  });
  
  it('should be a "tr[2]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[2]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('eat dinnerEditDelete');
       } 
    });
  });
  
  it('should be a "tr[2]/td[1]" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[2]/td[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('eat dinner');
	   } 
    });
  });
  
  it('should be a "Edit" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[2]/td[2]/button[1]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Edit');
       } 
    });
  });
  
  it('should be a "Delete" there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	
	scripts: ["http://localhost:8080/bundle.js"],
        
    done: (errors, window) => {
	    
	expect(window.document.evaluate('.//*[@id="app"]/div/table/tbody/tr[2]/td[2]/button[2]', window.document.documentElement,
        null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent).to.equal('Delete');
    } 
    });
  });
  
});
