/* eslint-disable max-lines-per-function */
import actions from './actions';
import TodoManager from '../services/todoManager';
import TaskManager from '../services/taskManager';

// eslint-disable-next-line max-statements
describe('actions', () => {
	const {	setInput, addTodo, toggleTodo, toggleAllTodos, removeTodo,
		getClearCompleted, setFilter, setEditing, addTask,
		addTaskTodo, removeTask, editTodo } = actions;

	const data = {
		id: Symbol('id'),
		text: Symbol('text'),
	};

	const state = {
		todos: Symbol('todos'),
		input: Symbol('input'),
		tasks: Symbol('task'),
		editing: Symbol('editing'),
	};

	test('SetInput - sets the given input', () => {
		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});

	test('AddTodo - adds the given todo', () => {
		const addedTodo = Symbol('addedTodo');

		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(addedTodo);

		const expectation = { todos: addedTodo, input: '' };
		const result = addTodo({ state });

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(state.todos, state.input);
		expect(result).toEqual(expectation);
	});

	test('ToggleTodo - toggle the todo', () => {
		const toggledTodo = Symbol('toggledTodo');

		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(toggledTodo);

		const expectation = { todos: toggledTodo };
		const result = toggleTodo({ state, data });

		expect(TodoManager.toggleTodo).toHaveBeenCalledWith(state.todos, data);
		expect(result).toEqual(expectation);
	});

	test('ToggleAllTodos - toggle all the todos', () => {
		const toggledAllTodos = Symbol('toggledAllTodos');

		jest.spyOn(TodoManager, 'toggleAllTodos')
			.mockReturnValue(toggledAllTodos);

		const expectation = { todos: toggledAllTodos };
		const result = toggleAllTodos({ state, data });

		expect(TodoManager.toggleAllTodos)
			.toHaveBeenCalledWith(state.todos, data);
		expect(result).toEqual(expectation);
	});

	test('RemoveTodo - removes the todo', () => {
		const removedTodo = Symbol('removedTodo');

		jest.spyOn(TodoManager, 'removeTodo').mockReturnValue(removedTodo);

		const expectation = { todos: removedTodo };
		const result = removeTodo({ state, data });

		expect(TodoManager.removeTodo).toHaveBeenCalledWith(state.todos, data);
		expect(result).toEqual(expectation);
	});

	test('ClearCompleted - clears the completed todo', () => {
		const clearedCompleted = Symbol('clearedCompleted');

		jest.spyOn(TodoManager, 'clearCompleted')
			.mockReturnValue(clearedCompleted);

		const expectation = { todos: clearedCompleted };
		const result = getClearCompleted({ state });

		expect(TodoManager.clearCompleted).toHaveBeenCalledWith(state.todos);
		expect(result).toEqual(expectation);
	});

	test('SetFilter - set a particular filter', () => {
		const result = setFilter({ data });

		expect(result).toEqual({ filter: data });
	});

	test('SetEditing - sets the editing', () => {
		const result = setEditing({ data });

		expect(result).toEqual({ editing: data, input: data.text });
	});

	test('AddTask - adds a new task', () => {
		const addedTask = Symbol('addedTask');

		jest.spyOn(TaskManager, 'addTask').mockReturnValue(addedTask);

		const expectation = { tasks: addedTask };
		const result = addTask({ state, data });

		expect(TaskManager.addTask).toHaveBeenCalledWith(state.tasks, data);
		expect(result).toEqual(expectation);
	});

	test('AddTaskTodo - add task to todo', () => {
		const addedTaskTodo = Symbol('addedTaskTodo');

		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(addedTaskTodo);

		const expectation = { todos: addedTaskTodo };
		const result = addTaskTodo({ state, data });

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(state.todos, data.text);
		expect(result).toEqual(expectation);
	});

	test('RemoveTask - remove the task', () => {
		const removedTask = Symbol('removedTask');

		jest.spyOn(TaskManager, 'removeTask').mockReturnValue(removedTask);
		const expectation = { tasks: removedTask };
		const result = removeTask({ state, data });

		expect(TaskManager.removeTask).toHaveBeenCalledWith(state.tasks, data);
		expect(result).toEqual(expectation);
	});

	test('EditTodo - edits the particular todo', () => {
		const editedTodo = Symbol('editedTodo');

		jest.spyOn(TodoManager, 'editTodo').mockReturnValue(editedTodo);
		const expectation = { todos: editedTodo, input: '', editing: null };
		const result = editTodo({ state });

		expect(TodoManager.editTodo)
			.toHaveBeenCalledWith(
				state.todos, state.editing, state.input
			);
		expect(result).toEqual(expectation);
	});
});
