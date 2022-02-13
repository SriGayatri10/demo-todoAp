import TodoManager from '../services/todoManager';
import todoDisplay from './todoDisplay';

const todoList = (context) => {
	const { filter, todos } = context.state;
	const filteredTodo = TodoManager.setFilter(todos, filter);

	return filteredTodo.map((todo) => todoDisplay({ ...context, data: todo }));
};

export default todoList;
