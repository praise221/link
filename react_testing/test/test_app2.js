import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';
import {toggleTask} from '../src/components/app';

describe('Test App', function() {
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

  });

  it('should be a TodosList ', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TodosList)).to.have.length(1);
  });

  it('should be 2 TodosItem ', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem)).to.have.length(2);
  });

  it('The first TodosItem "make React tutorial" is not completed', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).first().props()['task']).to.equal('make React tutorial');
	expect(wrapper.find(TodosItem).first().props()['isCompleted']).to.equal(false);
  });

  it('The first TodosItem "eat dinner" is not completed', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal('eat dinner');
	expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(true);
  });
  
});
  
