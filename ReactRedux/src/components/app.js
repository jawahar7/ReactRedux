import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextInput from './TextInput';
import TodoList from './TodoList';
import TaskAdd from '../actions/TaskAdd';

class App extends Component {	
	render() {
		return (
			<div>
				<h2>Todo List</h2>
				<TextInput addTodo={this.props.action.addtodo}/>
				<TodoList deleteTodo={this.props.action.deletetodo} />
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		action: bindActionCreators(TaskAdd, dispatch)		
	}
}

export default connect(null, mapDispatchToProps)(App);