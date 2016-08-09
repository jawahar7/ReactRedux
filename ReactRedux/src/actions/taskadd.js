let nextTodoId = 0
export const TaskAdd = (text) =>{	
	return{
		type: 'TASK_ADD',
		id: nextTodoId++,
		text
	}
}