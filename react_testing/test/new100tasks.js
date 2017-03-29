import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';

describe('Test app.js', function() {
it('createTask(): create 100 tasks "A0 ~ A100" and it is uncompleted', function () {
	const wrapper = mount(<App />);
    var newTask='A';
	var i;
	for (i=0;i<=100;i++){
    wrapper.instance().createTask(newTask+i);
	
    expect(wrapper.instance().state['todos']).to.have.length(3+i);
	
    expect(wrapper.instance().state['todos'][2+i]['task']).to.equal(newTask+i);
    expect(wrapper.instance().state['todos'][2+i]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3+i);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask+i);
	}
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
   
});