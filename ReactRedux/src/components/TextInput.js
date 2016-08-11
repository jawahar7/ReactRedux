import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TextInput extends Component{	
	constructor(props){
		super(props);
		this.state = { inputText: ''}
	}

	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();		
		this.props.addTodo(this.state.inputText);
		//this.props.TaskAdd(this.state.inputText);
		this.setState({
			inputText: ''
		})
	}

	render(){
		return (
				<form onSubmit={this.handleSubmit.bind(this)}>				
					<input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)} />
					<input type="submit" value="Add"  />
				</form>
			)
	}
}

export default TextInput;