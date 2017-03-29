import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import TodosListHeader from '../src/components/todos-list-header';
import Create from '../src/components/create-todo';
import APP from '../src/components/app';
import TodoList from '../src/components/todos-list';

describe('Test todos-list-header.js', function() {
  it('should be a thead there.', function () {
    const wrapper = shallow(<TodosListHeader/>);
    expect(wrapper.find('thead')).to.have.length(1);
  });

  it('should have a tr here.', function(){
     const wrapper = shallow(<TodosListHeader/>);
     expect(wrapper.find('tr')).to.have.length(1);
  });
  
  it('should have a Action here.', function(){
     const wrapper = shallow(<TodosListHeader/>);
     expect(wrapper.find('th')).to.have.length(2);
     wrapper.find('th').last().simulate('Action');
	 //console.log(wrapper.find('th').last().props().children)
     expect((wrapper.find('th').last().props().children)).to.equal("Action");
  });
  
  it('should have a Task here.', function(){
     const wrapper = shallow(<TodosListHeader/>);
     expect(wrapper.find('th')).to.have.length(2);
     wrapper.find('th').first().simulate('Task');
	 //console.log(wrapper.find('th').first().props().children)
     expect((wrapper.find('th').first().props().children)).to.equal("Task");
  });
  
/*  
  it('render(): <thead><tr><th>Task</th><th>Action</th></tr></thead>', function () {
    const wrapper = shallow(<ListHeader />);
    expect(wrapper.html()).to.equal('<thead><tr><th>Task</th><th>Action</th></tr></thead>');
  });  
*/
  
});