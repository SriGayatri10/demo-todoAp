import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state),
	input: '',
});

const toggleTodo = ({ state, data }) => ({
	todos: TodoManager.toggleTodo(state.todos, data),
});

const toggleAllTodos = ({ state, data }) => ({
	todos: TodoManager.toggleAllTodos(state.todos, data),
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.removeTodo(state.todos, data),
});

const getClearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});

const setFilter = ({ data }) => ({
	filter: data,
});

const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});

const editTodo = ({ state }) => ({
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
	input: '',
	editing: null,
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAllTodos,
	removeTodo,
	getClearCompleted,
	setFilter,
	setEditing,
	editTodo,
};

export default actions;
