const TaskReducer = function(state = [], action) {
	switch (action.type) {
		case 'TASK_ADD':			
			return [...state, {id: action.id, task: action.text}] 
			break;
		default:
			return state;
			break;
	}
}

export default TaskReducer;