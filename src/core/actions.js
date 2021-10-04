import TodoManager from '../services/todoManager';
import TaskManager from '../services/taskManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
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

const addTask = ({ state, data }) => ({
	tasks: TaskManager.addTask(state.tasks, data),
});

const addTaskTodo = ({ state, data }) => ({
	todos: TodoManager.addTodo(state.todos, data.text),
});

const removeTask = ({ state, data }) => ({
	tasks: TaskManager.removeTask(state.tasks, data),
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
	addTask,
	addTaskTodo,
	removeTask,
};

export default actions;
