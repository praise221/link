import React from 'react';

import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import TodosList from '../src/components/todos-list';
import TodosItem from '../src/components/todos-list-item';
import ListHeader from '../src/components/todos-list-header';

describe('Test todos-list.js', function() { 

let fakeTodos = [{task: 'Ha', isCompleted: false},{task: 'Hi',isCompleted: true}];
    
  it('renderItems(): with empty todos will return empty list.', function () {
    const wrapper = shallow(<TodosList />);
    let result = wrapper.instance().renderItems();
    expect(result).to.have.length(0);
  });

  it('renderItems(): with todos {task: "Ha", isCompleted: false},{task: "Hi",isCompleted: true}, will return 2 TodosItem', function () {
    const wrapper = shallow(<TodosList todos={fakeTodos} />);
    let result = wrapper.instance().renderItems();
    expect(result).to.have.length(2);
	//console.log((result[0].props));
	
    expect(result[0].props).to.deep.equal({task: 'Ha', isCompleted: false}); 
	
	//console.log(result[0].key);
    expect(result[0].key).to.equal('0'); 
    expect(result[0].type).to.equal(TodosItem); 
    expect(result[1].props).to.deep.equal({task: 'Hi', isCompleted: true}); 
    expect(result[1].key).to.equal('1'); 
    expect(result[1].type).to.equal(TodosItem); 
  });


it('renderItems(): with empty todos will return a emtpy list.', function () {
    const wrapper = shallow(<TodosList />);
    let result = wrapper.instance().render();
	
	console.log(result.type);
    //expect(result.type).to.equal('table');
    let header = result.props['children'][0];
    let tbody = result.props['children'][1];
	
    expect(header.type).to.equal(ListHeader); 
    expect(tbody.type).to.equal('tbody'); 
    let items = tbody.props['children'];
    expect(items).to.have.length(0); 
  });
  
  });