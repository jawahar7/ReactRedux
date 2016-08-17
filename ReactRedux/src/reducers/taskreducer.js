let TaskReducer = function(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':			
			return [...state, {id: action.id, task: action.text}] 
			break;
		case 'DELETE_TODO':
			return Object.assign([], state.filter((todo)=>{return todo.id !== action.index}))
		default:
			return state;
			break;
	}
}

export default TaskReducer;