/* eslint-disable no-console */
import context from '../core/context';
import TodoManager from '../services/todoManager';
import todoDisplay from './todoDisplay';

const todoList = () => {
	const { filter, todos } = context.state;

	// console.log(filter);
	// console.log(todos);
	const filteredTodo = TodoManager.setFilter(todos, filter);

	// console.log(filteredTodo);

	return filteredTodo.map(todoDisplay);
};

export default todoList;
