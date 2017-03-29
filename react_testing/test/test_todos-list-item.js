import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import TodosList from '../src/components/todos-list';
import CreateTodo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';
var jsdom = require('jsdom').jsdom;

describe('Test todos-list-item.js', function() {
  var fakeToggleTaskStub,fakeDeleteStub,fakeSaveStub=false;
  let fakeToggleTask = function(task){fakeToggleTaskStub=true;};
  let fakeDeleteTask = function(task){fakeDeleteStub=true;};
  let fakeSaveTask = function(task){fakeSaveStub=true;};
  const fakeProps={toggleTask: fakeToggleTask , deleteTask: fakeDeleteTask, saveTask:fakeSaveTask};

  before('setup toogleTask/deleteTask props', function() {
    // runs before all tests in this block
  });

  after('none', function() {
    // runs after all tests in this block
  });

  it('Constructor with state {isEditing: false}.', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    expect(wrapper.instance().state['isEditing']).to.equal(false);
  });
  
  it('onEditClick(): the state "isEditing" will be set to true.', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().onEditClick();
    expect(wrapper.instance().state).to.deep.equal({isEditing:true});
   });

  it('onCancelClick(): the state "isEditing" will be set to false', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().onCancelClick();
    expect(wrapper.instance().state).to.deep.equal({isEditing:false});
   });
   
   it('renderActionsSection(): with an button with text "Save"', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
	wrapper.instance().onEditClick();
    expect(wrapper.find('button').first().text()).to.equal('Save');
  });
   
   it('renderActionsSection(): with an button with text "Cancel"', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
	wrapper.instance().onEditClick();
    expect(wrapper.find('button').last().text()).to.equal('Cancel');
  });
  
  it('renderActionsSection(): with an button with text "Edit"', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    expect(wrapper.find('button').first().text()).to.equal('Edit');
  });
  
  it('renderActionsSection(): with an button with text "Delete"', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    expect(wrapper.find('button').last().text()).to.equal('Delete');
  });
  
/*
 it('onSaveClick(event):' , function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} saveTask={fakeSaveTask}/>);
    wrapper.instance().onEditClick();
	
    expect(wrapper.instance().state).to.deep.equal({isEditing:false});
   });
*/
   
  it('handleCreate(event): setProps "saveTask" a fake function, then sumbit with input value "Hello", expect state will be {error:null} and createInput.value will be empty "".', function () {
    //var ev = new document.Event("fake", {"bubbles":true, "cancelable":false}); 
    var event = document.createEvent('Event');
    event.initEvent('fake', true, true);
    //const wrapper = mount(<table><tbody><TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} saveTask={fakeSaveTask} /></tbody></table>);
    //wrapper.find(TodosItem).node.state['isEditing']=true;
    //var newWrapper = wrapper.children().childAt(0);
    //console.log(newWrapper);
    //console.log(wrapper);
    //wrapper.update();
    //newWrapper.node.onSaveClick(event);
    //console.log(wrapper.find(TodosItem).node.state);
    //wrapper.update(); // setState({isEditing:true});
    //wrapper.find(TodosItem).node.onSaveClick(event);
   
    const wrapper = mount(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} saveTask={fakeSaveTask} />);
    wrapper.setState({isEditing:true});
    wrapper.instance().onSaveClick(event);
  });


  
});


