import config from '../core/config';
import * as random from '@laufire/utils/random';

// eslint-disable-next-line arrow-body-style
const addTodo = (todos, input) => {
	return todos.concat({
		id: random.rndString(config.refreshIDLength),
		text: input,
		isCompleted: false,
	});
};

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

// eslint-disable-next-line arrow-body-style
const getActiveTodos = (todos) => {
	return todos.length;
};

const removeTodo = (todos, todoTobeRemoved) =>
	todos.filter((todo) => todo.id !== todoTobeRemoved.id);

const getCompletedCount = (todos) =>
	todos.filter((todo) => todo.isCompleted).length;

const clearCompleted = (todos) =>
	todos.filter((todo) => !todo.isCompleted);

const getTodosCount = (data) => data.length;

const filters = {
	All: () => true,
	Active: (todo) => !todo.isCompleted,
	Completed: (todo) => todo.isCompleted,
};

const setFilter = (todos, filter) => todos.filter(filters[filter]);

const editTodo = (
	todos, editing, text
) => todos.map((todo) =>
	(todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		}));

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAllTodos,
	getActiveTodos,
	getActiveChecked,
	removeTodo,
	getCompletedCount,
	clearCompleted,
	getTodosCount,
	setFilter,
	editTodo,
};

export default TodoManager;
