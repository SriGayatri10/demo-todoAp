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

const toggleAllTodos = (todos, ischecked) =>
	todos.map((todo) => ({ ...todo, isCompleted: ischecked }));

const getActiveChecked = (todos) =>
	todos.filter((todo) => !todo.isCompleted).length;

const getActiveTodos = (todos) => todos.length;

const removeTodo = (todos, todoTobeRemoved) =>
	todos.filter((todo) => todo.id !== todoTobeRemoved.id);

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAllTodos,
	getActiveTodos,
	getActiveChecked,
	removeTodo,
};

export default TodoManager;
