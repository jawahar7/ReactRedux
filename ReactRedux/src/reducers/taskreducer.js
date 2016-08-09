let TaskReducer = function(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':			
			return [...state, {id: action.id, task: action.text}] 
			break;
		default:
			return state;
			break;
	}
}

export default TaskReducer;