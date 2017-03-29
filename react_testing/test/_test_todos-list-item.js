import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {sinon, spy , stub} from 'sinon';
import TodoListItem from '../src/components/todos-list-item';
import Create from '../src/components/create-todo';
import APP from '../src/components/app';
import TodoList from '../src/components/todos-list';

describe('Test todos-list-item.js', function() {
  it('should be a button=Save there.', function () {
    const wrapper = shallow(<TodoListItem/>);
    //expect(wrapper.find('td')).to.have.length(2);
	console.log(wrapper.find('tr').props());
  });

  
});