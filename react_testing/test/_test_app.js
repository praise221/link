import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import APP from '../src/components/app';
import Create from '../src/components/create-todo';
import TodoList from '../src/components/todos-list';


describe('Test app.js', function() {
  it('should have a div here.', function(){
     const wrapper = shallow(<APP/>);
     expect(wrapper.find('div')).to.have.length(1);
  });

  it('should have a title here.', function(){
     const wrapper = shallow(<APP/>);
     expect(wrapper.find('h1')).to.have.length(1);	 
  });
  
  it('should have a title=React ToDos App', function(){
     const wrapper = shallow(<APP/>);
     expect(wrapper.find('h1')).to.have.length(1);	 
	 expect(wrapper.find('h1').last().props().children).to.equal("React ToDos App");
  });
   
/*   
   it('should have a task:make React tutorial here.', function(){
     const wrapper = shallow(<APP/>);
	 const todos = shallow(<APP/>);
	 expect(wrapper.find('div')).to.have.length(1); 
	 //expect(wrapper.find('form')).to.have.length(1);
	 console.log(wrapper.find('todos').setContext({ task: 'make React tutorial' }));
	 //console.log((wrapper.find('td').first().node.value));
	 //console.log((wrapper.find('a').first().props()));
     //expect(wrapper.find('a')).last().node.value='eat dinner';
	 //console.log((wrapper.find('todos').task));
	 //expect((wrapper.find('todos').props().type)).to.equal("text");
  });
*/
  
});

