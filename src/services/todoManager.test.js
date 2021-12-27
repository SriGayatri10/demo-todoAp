/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
import TodoManager from './todoManager';
import { rndString } from '@laufire/utils/random';
// eslint-disable-next-line max-statements
describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleAllTodos, getActiveChecked,
		getActiveTodos, removeTodo, getClearCompletedCount, clearCompleted,
		getTodosCount, setFilter, editTodo, toArray } = TodoManager;

	const getId = () => Symbol('id');
	const getText = () => Symbol('text');
	const	existingTodoIdOne	= getId();
	const	existingTodoIdTwo = getId();
	const	existingTodoTextOne = getText() ;
	const	existingTodoTextTwo = getText();

	const existingTodos = [
		{
			id: existingTodoIdOne,
			text: existingTodoTextOne,
			isCompleted: false,
		},
		{
			id: existingTodoIdTwo,
			text: existingTodoTextTwo,
			isCompleted: false,
		},
	];
	const [impactedTodo, unImpactedTodo] = existingTodos;

	test('Add Todo - adds the given todo', () => {
		const text = Symbol('welcome');
		const result = addTodo(existingTodos, text);
		const newTodo = {
			id: expect.any(String),
			text: text,
			isCompleted: false,
		 };

		expect(result).toEqual([...existingTodos, newTodo]);
	});

	test('Toggle Todo', () => {
		const expectation = [
			{ ...impactedTodo, isCompleted: !impactedTodo.isCompleted },
			unImpactedTodo,
		];

		const result = toggleTodo(existingTodos, impactedTodo);

		expect(result).toEqual(expectation);
	});
	test('ToggleAllTodos - Updating  isCompleted', () => {
		const isChecked = true;
		const results = toggleAllTodos(existingTodos, isChecked);

		results.map((result, index) => {
			expect(result).toEqual({
				 ...existingTodos[index], isCompleted: isChecked,
			});
		});
	});
	test('getActiveChecked - Getting No of activeTodos present', () => {
		const noOfActiveTodos = getActiveChecked(existingTodos);

		expect(noOfActiveTodos).toEqual(2);
	});
	test('Obtaining length of activeTodos', () => {
		const length = getActiveTodos(existingTodos);

		expect(length).toEqual(2);
	});

	test('Remove Todo - removes the selected todo', () => {
		const afterTodoRemoval = removeTodo(existingTodos, impactedTodo);

		expect(afterTodoRemoval).toEqual([unImpactedTodo]);
	});
	test('clearCompletedCount - gets the count of clearCompleted', () => {
		const length = getClearCompletedCount(existingTodos);

		expect(length).toEqual(0);
	});
	test('Clear Completed', () => {
		const clearcompleted = clearCompleted(existingTodos);

		expect(clearcompleted).toEqual(existingTodos);
	});
	test('TodosCount- Count the no of todos', () => {
		const length = getTodosCount(existingTodos);

		expect(length).toEqual(2);
	});
	test('setFilter - set a particular filter which is required', () => {
		const activeTodoId = getId();
		const activeTodoText = getText();
		const completedTodoId = getId();
		const completedTodoText = getText();
		const activeTodos = [{
			id: activeTodoId,
			text: activeTodoText,
			isCompleted: false,
		}];
		const completedTodos = [{
			id: completedTodoId,
			text: completedTodoText,
			isCompleted: true,
		}];
		const inputTodos = [...activeTodos, ...completedTodos];
		const expectations = [
			{
				filter: 'All',
				todos: inputTodos,
			 },
			{
				filter: 'Active',
				todos: activeTodos,
			 },
			{
				filter: 'Completed',
			 	todos: completedTodos,
			},
		];

		expectations.map(({ filter, todos }) => {
			const result = setFilter(inputTodos, filter);

			expect(result).toEqual(todos);
		});
	});
	test('EditTodo -  edit the existing todos present', () => {
		const data = Symbol('bye');
		const result = editTodo(
			existingTodos, impactedTodo, data
		);
		const expectation = [
			{ ...impactedTodo, text: data },
			unImpactedTodo,
		];

		expect(result).toEqual(expectation);
	});
});
