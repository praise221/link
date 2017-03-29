import {expect} from 'chai';

describe('Test index.html', function() {
  
  it('should be a input there.', function () {
    	
    require('jsdom').env({
     
    url: 'http://localhost:8080/',
	       
    done: (errors, window) => {
	   
	//console.log(window.document.documentElement.outerHTML);   
	  	  
		console.log(window.document.evaluate('//*[@id="app"]/div/form/input', window.document,
          null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.getAttribute('ref'));  
		  
      } 
	  
	,features: {
            FetchExternalResources: ["script"],
            ProcessExternalResources: ["script"],
            SkipExternalResources: false
        }  
	  

	  
    });
  });
 });