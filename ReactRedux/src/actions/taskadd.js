let nextTodoId = 0
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