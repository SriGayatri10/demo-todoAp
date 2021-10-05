import context from '../core/context';
import TodoManager from '../services/todoManager';
import todoDisplay from './todoDisplay';

const todoList = () => {
	const { filter, todos } = context.state;
	const filteredTodo = TodoManager.setFilter(todos, filter);

	return filteredTodo.map(todoDisplay);
};

export default todoList;
