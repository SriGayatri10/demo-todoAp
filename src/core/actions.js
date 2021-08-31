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

const actions = {
	setInput,
	addTodo,
	toggleTodo,

};

export default actions;
