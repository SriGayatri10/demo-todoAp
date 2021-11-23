/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import TodoManager from './todoManager';
// eslint-disable-next-line max-statements
describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleAllTodos, getActiveChecked,
		getActiveTodos, removeTodo, getClearCompletedCount, clearCompleted,
		getTodosCount, setFilter, editTodo } = TodoManager;

	test('Add Todo - adds the given todo', () => {
		const result = addTodo([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		], 'welcome');

		expect(result).toEqual([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
			{ id: expect.any(String), text: 'welcome', isCompleted: false },
		]);
	});
	test('Toggle Todo', () => {
		const result = toggleTodo([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		], { id: 'MFMULLYR', text: 'hi', isCompleted: false },);

		expect(result).toEqual([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: true },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		]);
	});
	test('ToggleAllTodos - Updating  isCompleted', () => {
		const result = toggleAllTodos([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		], true);

		expect(result).toEqual([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: true },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: true },
		]);
	});
	test('getActiveChecked - Getting No of activeTodos present', () => {
		const noOfActiveTodos = getActiveChecked([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		]);

		expect(noOfActiveTodos).toEqual(2);
	});
	test('Obtaining length of activeTodos', () => {
		const length = getActiveTodos([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		]);

		expect(length).toEqual(2);
	});

	test('Remove Todo - removes the selected todo', () => {
		const afterTodoRemoval = removeTodo([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		], { id: 'BWEGNGHV', text: 'hello', isCompleted: false });

		expect(afterTodoRemoval).toEqual([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
		]);
	});
	test('clearCompletedCount - gets the count of clearCompleted', () => {
		const length = getClearCompletedCount([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: true },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
			{ id: 'RAEINOGV', text: 'welcome', isCompleted: false },
		]);

		expect(length).toEqual(1);
	});
	test('Clear Completed', () => {
		const clearcompleted = clearCompleted([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: true },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
			{ id: 'RAEINOGV', text: 'welcome', isCompleted: false },
		]);

		expect(clearcompleted).toEqual([
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
			{ id: 'RAEINOGV', text: 'welcome', isCompleted: false },
		]);
	});
	test('TodosCount- Count the no of todos', () => {
		const length = getTodosCount([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		]);

		expect(length).toEqual(2);
	});
	test('setFilter - set a particular filter which is required', () => {
		const result = setFilter([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: true },
		], 'Active');

		expect(result).toEqual([
			{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
		]);
	});
	test('EditTodo -  edit the existing todos present', () => {
		const result = editTodo(
			[
				{ id: 'MFMULLYR', text: 'hi', isCompleted: false },
				{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
			], { id: 'MFMULLYR', text: 'welcome', isCompleted: false }, 'bye'
		);

		expect(result).toEqual([
			{ id: 'MFMULLYR', text: 'bye', isCompleted: false },
			{ id: 'BWEGNGHV', text: 'hello', isCompleted: false },
		]);
	});
});
