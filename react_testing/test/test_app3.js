import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';
import {toggleTask} from '../src/components/app';
import _ from 'lodash';

describe('Test app.js', function() {
  it('should be a h1 there.', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should be a h1 React ToDos App.', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').first().text()).to.equal('React ToDos App');
  });
  
  it('should be a CreateToDo ', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CreateToDo)).to.have.length(1);
  });
  
  it('should be a TodosList ', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TodosList)).to.have.length(1);
  });
 
  it('should be 2 TodosItem ', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem)).to.have.length(2);
  });

  it('The first TodosItem is "make React tutorial"', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).first().props()['task']).to.equal('make React tutorial');
  });
  
  it('The first TodosItem "make React tutorial" is not completed', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).first().props()['task']).to.equal('make React tutorial');
    expect(wrapper.find(TodosItem).first().props()['isCompleted']).to.equal(false);
  });

  it('The last TodosItem is "eat dinner"', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal('eat dinner');
  });

  it('The last TodosItem "eat dinner" is completed', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal('eat dinner');
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(true);
  });

  it('toggleTask(): Toggle TodosItem "eat dinner" to uncompleted', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal('eat dinner');
    wrapper.instance().toggleTask('eat dinner');
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
  it('toogleTask(): Toggle TodosItem "make React tutorial" to completed', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).first().props()['task']).to.equal('make React tutorial');
    wrapper.instance().toggleTask('make React tutorial');
    expect(wrapper.find(TodosItem).first().props()['isCompleted']).to.equal(true);
  });
  
  it('createTask(): create a new task "a" and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask='a';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(3);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
/*  
  it('createTask(): create a new task "a" and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask=' ';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(4);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(4);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
*/  
  
  it('saveTask(): change "a" task to "A"', function () {
    const wrapper = mount(<App />);
    let oldTask='a';
    let newTask='A';
    wrapper.instance().saveTask(oldTask,newTask);
    expect(wrapper.instance().state['todos']).to.have.length(3);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });

  it('deleteTask(): remove task "A"', function () {
    const wrapper = mount(<App />);
    let oldTask='A';
    wrapper.instance().deleteTask(oldTask);
    expect(wrapper.instance().state['todos']).to.have.length(2);
  });

});


