import React from 'react';
import {sinon, spy , stub} from 'sinon';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Create from '../src/components/create-todo';
import APP from '../src/components/app';
import TodoList from '../src/components/todos-list';

describe('Test create-todo.js', () => {
  it('should be a form there.', () => {
    const wrapper = shallow(<Create/>);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have a input here.', () =>{
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button here.', () =>{
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('button')).to.have.length(1);
  });
});

describe('Test create todo.js', () => {
  it('should have a input type="text"', function(){
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('input')).to.have.length(1);
     //console.log ((wrapper.find('input').last().props()));
	 //type:'text',placeholder:'What do I need to do?'
     expect((wrapper.find('input').props().type)).to.equal("text");
    });	 
   	
	it('should have a placeholder="What do I need to do?"', function(){
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('input')).to.have.length(1);
     expect((wrapper.find('input').props().placeholder)).to.equal("What do I need to do?");
    });	 
});

describe('Test create todo.js', () => {
  it('should have a button with Create text', function(){
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('button')).to.have.length(1);
     expect(wrapper.find('div')).to.have.length(0);
     const onButtonClick = spy();
     wrapper.find('button').last().simulate('click');
     expect((wrapper.find('button').last().props().children)).to.equal("Create");
	 
	 //console.log(wrapper.find('button').last().name());
	 // ->button
     //console.log(wrapper.find('button').last().props());
	 // ->children: 'Create'
     //console.log(wrapper.find('button').last().props().children);
	 // ->Create
	 
  });
  
   it('should click button with Submit', function(){
     const wrapper = shallow(<Create/>);
     expect(wrapper.find('button')).to.have.length(1);
     expect(wrapper.find('div')).to.have.length(0);
     const submitStub = stub();
     const loginComponent = mount(<form onSubmit={submitStub} /> );
     loginComponent.simulate('submit');
     expect(submitStub.calledOnce).to.equal(true);
     expect(submitStub).to.have.property('callCount', 1);
     const wrapper2 = shallow(<Create/>);
     
	 //console.log(wrapper2.props());
     //console.log(submitStub.returns());
	 
	 //wrapper.find('button').last().simulate('click');
     //console.log(wrapper.find('button').last().props().children);
     //wrapper.find('form').last().simulate('Submit');
     //wrapper.find('[type="submit"]').get(0).click();
     //wrapper.find('[data-reactid=".0.1.1"]').get(0).click();
     //console.log(wrapper.find('').last().props());
     //expect((wrapper.find('button').last().props().children)).to.equal("Create");
	 
	  });
	

   it('should show red "Please enter a task." when !task ', function(){
	 const submitStub = stub();
     const wrapper = mount(<Create> <form onSubmit={submitStub} /> </Create>);
     expect(wrapper.find('button')).to.have.length(1);
     expect(wrapper.find('div')).to.have.length(0);
     wrapper.find('form').last().simulate('submit');
     expect(wrapper.find('div')).to.have.length(1);  
     //console.log(wrapper.find('div').last().props());
	 expect(wrapper.find('div').last().props().style.color).to.equal("red");
	 expect(wrapper.find('div').last().props().children).to.equal("Please enter a task.");

  });

  
/*
   
  it('should have a task:make React tutorial here.', function(){
     const wrapper = shallow(<Create/>);
	 const todos = shallow(<Create/>);
	 expect(wrapper.find('div')).to.have.length(0);  
	 //console.log('a',(wrapper.find('td').first()));
	 //console.log('b',(wrapper.find('a').first()));
     //expect(wrapper.find('a')).last().node.value='eat dinner';
	 //console.log((wrapper.find('todos').task));
	 //expect((wrapper.find('todos').props().type)).to.equal("text");
  });
*/
  
/*
    it('should show "Task already exists." when create the same task ', function(){
	 const submitStub = stub();
     const wrapper = mount(<Create> <form onSubmit={submitStub} /> </Create>);
     expect(wrapper.find('button')).to.have.length(1);
     expect(wrapper.find('div')).to.have.length(0);
	 wrapper.find('input').last().node.value='eat dinner';
     wrapper.find('form').last().simulate('submit');
	 expect(wrapper.find('div').last().props().children).to.equal("Task already exists.");

  });
*/
  
});