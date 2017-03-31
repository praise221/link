import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import TodosList from '../src/components/todos-list';
import CreateToDo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';

import 'jsdom-global/register';
import _ from 'lodash';



describe('Test app.js', function() {
  it('constructor should be 2 todos there.', function () {
    const wrapper = shallow(<App />);
	//console.log(wrapper.instance().state);
    expect(wrapper.instance().state['todos']).to.have.length(2);
  }); 
	
  it('should be a h1 there.', function () {
    const wrapper = shallow(<App><div></div></App>);
  
	//var x= document.getElementById();
	//console.log(document.getElementById(x));
	expect(wrapper.find('div').first().props()['id']).to.equal('myDIV');
	expect(wrapper.find('h1').first().props()['id']).to.equal('myTitle');
    expect(wrapper.find('h1')).to.have.length(1);
	});

  it('should be a h1 React ToDos App.', function () {
    const wrapper = shallow(<App><div></div></App>);
    expect(wrapper.find('h1').first().text()).to.equal('React ToDos App');
  });
  
  it('should be a CreateToDo ', function () {
    const wrapper = shallow(<App><div></div></App>);
    expect(wrapper.find(CreateToDo)).to.have.length(1);
  });
  
  it('should be a TodosList ', function () {
    const wrapper = shallow(<App><div></div></App>);
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
  
  it('toogleTask(): Toggle TodosItem "make React tutorial" to uncompleted', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find(TodosItem).first().props()['task']).to.equal('make React tutorial');
    wrapper.instance().toggleTask('make React tutorial');
    expect(wrapper.find(TodosItem).first().props()['isCompleted']).to.equal(true);
  });

  it('createTask(): create a new task "A" and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask='A';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(3);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
  it('saveTask(): change "A" task to "a"', function () {
    const wrapper = mount(<App />);
    let oldTask='A';
    let newTask='a';
    wrapper.instance().saveTask(oldTask,newTask);
    expect(wrapper.instance().state['todos']).to.have.length(3);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });

  it('deleteTask(): remove task "a"', function () {
    const wrapper = mount(<App />);
    let oldTask='a';
    wrapper.instance().deleteTask(oldTask);
    expect(wrapper.instance().state['todos']).to.have.length(2);
  });
  
  
/*  
  it('createTask(): create a new task "你好" and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask='你好';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(3);
    expect(wrapper.instance().state['todos'][2]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][2]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(3);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
  it('createTask(): create a new task "Ａ" and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask='Ａ';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(4);
    expect(wrapper.instance().state['todos'][3]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][3]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(4);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });

  it('createTask(): create a new task " " and it is uncompleted', function () {
    const wrapper = mount(<App />);
    let newTask=' ';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(5);
    expect(wrapper.instance().state['todos'][4]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][4]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(5);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
  it('createTask(): create a new task "，、。．？！～＄％＠＆ ＃＊" and it is uncompleted', function () {
    const wrapper = mount(<App />)
    let newTask='，、。．？！～＄％＠＆ ＃＊';
    wrapper.instance().createTask(newTask);
	expect(wrapper.instance().state['todos']).to.have.length(6);
    expect(wrapper.instance().state['todos'][5]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][5]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(6);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
	//console.log(wrapper.find(TodosItem).last().props()['task']);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
  
   it('createTask(): create a new task "/ \ < > : * " ? |" and it is uncompleted', function () {
    const wrapper = mount(<App />)
    let newTask='/ \ < > : * " ? |';
    wrapper.instance().createTask(newTask);
    expect(wrapper.instance().state['todos']).to.have.length(7);
    expect(wrapper.instance().state['todos'][6]['task']).to.equal(newTask);
    expect(wrapper.instance().state['todos'][6]['isCompleted']).to.equal(false);
    expect(wrapper.find(TodosItem)).to.have.length(7);
    expect(wrapper.find(TodosItem).last().props()['task']).to.equal(newTask);
    expect(wrapper.find(TodosItem).last().props()['isCompleted']).to.equal(false);
  });
*/  
  
});


