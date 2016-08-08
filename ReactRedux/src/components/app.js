import React, { Component } from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';

class App extends Component {	
	render() {
		return (
			<div>
				<h2>Todo List</h2>
				<TextInput />
				<TodoList />
			</div>
		)
	}
}

export default App