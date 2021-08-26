/* eslint-disable eqeqeq */
import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state),
	input: '',
});
const actions = {
	setInput,
	addTodo,

};

export default actions;
