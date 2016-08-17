let nextTodoId = 0
let TaskAdd = {
	addtodo(text) {
		return {
			type: 'ADD_TODO',
			id: nextTodoId++,
			text
		}
	},
	deletetodo(index) {
		return {
			type: 'DELETE_TODO',
			index
		}
	}
}

export default TaskAdd;