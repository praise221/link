import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import TodosList from '../src/components/todos-list';
import CreateTodo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';

describe('Test creat-todo.js', function() {


it('renderError() with state error:"Hello World"', function () {
    const wrapper = shallow(<CreateTodo />);
    let task="Hello World";
    wrapper.instance().state['error']=task;
	
	
    
	let result = wrapper.instance().renderError();
	
    //console.log(result);
	
	expect(result.props['style']).to.deep.equal({color:'red'});
    expect(result.props['children']).to.equal(task);
  });
  
  });