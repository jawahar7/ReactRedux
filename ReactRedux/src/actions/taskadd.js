let nextTodoId = 0
/*export const TaskAdd = (text) =>{	
	return{
		type: 'TASK_ADD',
		id: nextTodoId++,
		text
	}
}*/

let TaskAdd = {
	addtodo(text) {
		return{
			type: 'ADD_TODO',
			id: nextTodoId++,
			text
		}
	}
}

export default TaskAdd;