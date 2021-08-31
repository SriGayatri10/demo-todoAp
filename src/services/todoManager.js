import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const addTodo = (state) =>
	state.todos.concat({
		id: rndString(config.refreshIDLength),
		text: state.input,
		isCompleted: false,
	});

const toggleTodo = (todos, data) => todos.map((todo) =>
	(todo.id !== data.id
		? todo
		: {
			...todo,
			isCompleted: !data.isCompleted,
		}));

const TodoManager = {
	addTodo,
	toggleTodo,
};

export default TodoManager;
