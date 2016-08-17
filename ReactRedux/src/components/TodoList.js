import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component{	

	handleDelete(index) {
		this.props.deleteTodo(index);
	}

	render(){
		return(
				<ul>					
					{this.props.tasks.map((t, i)=>{
						 return <li key={i}>{t.task} <input type="button" value="Delete" onClick={this.handleDelete.bind(this, t.id)} /></li>
						}
					)}
				</ul>
			)
	}
}

function mapStateToProps(state) {
    return {
        tasks: state
    };
}

export default connect(mapStateToProps)(TodoList);