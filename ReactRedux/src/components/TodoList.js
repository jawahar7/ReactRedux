import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component{	
	render(){
		return(
				<ul>					
					{this.props.tasks.map((t, i)=>{
						 return <li key={i}>{t.task}</li>
						}
					)}
				</ul>
			)
	}
}

function mapStateToProps(state) {
console.log(state)	
    return {
        tasks: state
    };
}

export default connect(mapStateToProps)(TodoList);