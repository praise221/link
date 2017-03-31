import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';
import ListHeader from '../src/components/todos-list-header';

import 'jsdom-global/register';
import _ from 'lodash';

describe('Test todos-list.js', function() { 

let fakeTodos = [{task: 'Ha', isCompleted: false},{task: 'Hi',isCompleted: true}];
    before('none', function() {
    // runs before all tests in this block
    });
    after('none', function() {
    // runs after all tests in this block
    });

  it('renderItems(): with empty todos will return empty list.', function () {
    const wrapper = shallow(<TodosList />);
    let result = wrapper.instance().renderItems();
    expect(result).to.have.length(0);
  });

  it('renderItems(): with todos {task: "Ha", isCompleted: false},{task: "Hi",isCompleted: true}, will return 2 TodosItem', function () {
    const wrapper = shallow(<TodosList todos={fakeTodos} />);
    let result = wrapper.instance().renderItems();
	//console.log(result);
	
    expect(result).to.have.length(2);
    expect(result[0].props).to.deep.equal({task: 'Ha', isCompleted: false}); 
    expect(result[0].key).to.equal('0'); 
    expect(result[0].type).to.equal(TodosItem); 
    expect(result[1].props).to.deep.equal({task: 'Hi', isCompleted: true}); 
    expect(result[1].key).to.equal('1'); 
    expect(result[1].type).to.equal(TodosItem); 
  });
 
 it('renderItems(): with empty todos will return a emtpy list.', function () {
    const wrapper = shallow(<TodosList />);
    let result = wrapper.instance().render();
	//console.log(result);
    
	expect(result.type).to.equal('table');
	    
	let header = result.props['children'][0]; 
	let tbody = result.props['children'][1];
	
	expect(header.type).to.equal(ListHeader); 
	//console.log(ListHeader);
	//[Function: TodosListHeader]
    expect(tbody.type).to.equal('tbody'); 
    let items = tbody.props['children'];
    expect(items).to.have.length(0); 
	//console.log(items);
	//[]
  });

  it('renderItems(): with 2 todos will return a list with 2 todos-list-items.', function () {
    const wrapper = shallow(<TodosList todos={fakeTodos} />);
    let result = wrapper.instance().render();
    expect(result.type).to.equal('table');
    let header = result.props['children'][0];
    let tbody = result.props['children'][1];
    expect(header.type).to.equal(ListHeader); 
    expect(tbody.type).to.equal('tbody'); 
    let items = tbody.props['children'];
	
    expect(items).to.have.length(2); 
	//console.log(items);
	
	items.forEach(function (item){expect(item.type).to.equal(TodosItem)}); 
	
   });
 
  	
  it('should be a table there.', function () {
    const wrapper = shallow(<TodosList/>);
    expect(wrapper.find('table')).to.have.length(1);
  });
  it('should be a TodosListHeader there.', function () {
    const wrapper = shallow(<TodosList/>);
    expect(wrapper.find('TodosListHeader')).to.have.length(1);
  });
  it('should be a tbody there.', function () {
    const wrapper = shallow(<TodosList/>);
    expect(wrapper.find('tbody')).to.have.length(1);
  });  
});

