import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';

describe('Test index.html', function() {
  
  it('should be a title there.', function () {
    	
    const wrapper = shallow(<App />);
	var jsdom = require("jsdom");
	

    console.log(window.document.getElementById("myTitle").textContent);
	//expect(window.document.getElementById("myTitle").textContent).to.equal('React ToDos App');
	
   	  
  });

});