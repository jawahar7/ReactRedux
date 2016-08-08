import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {TaskAdd} from '../actions/TaskAdd';

let input
class TextInput extends Component{	
	render(){
		return (
				<div>				
					<input type="text" ref={node => {input = node}} />
					<input type="submit" value="Add" onClick={() => this.props.TaskAdd(input.value)} />
				</div>
			)
	}
}

function mapDispatchToProps(dispatch) {	
	return bindActionCreators({TaskAdd: TaskAdd}, dispatch);
}

export default connect(null, mapDispatchToProps)(TextInput);