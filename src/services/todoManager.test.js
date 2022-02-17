/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import TodoManager from './todoManager';
import { random } from '@laufire/utils';
import config from '../core/config';

describe('todoManager', () => {
	const { addTodo, hasInput, toggleTodo, toggleAllTodos, hasNoActiveTodos,
		hasNoTodos, removeTodo, hasCompletedTodos, clearCompleted,
		getTodosCount, setFilter, editTodo } = TodoManager;

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
		const id = getId();
		const text = getText();
		const newTodo = {
			id: id,
			text: text,
			isCompleted: false,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = addTodo(existingTodos, text);

		expect(random.rndString).toHaveBeenCalledWith(config.refreshIDLength);
		expect(result).toEqual([...existingTodos, newTodo]);
	});
	describe('isInput', () => {
		test('isInput is true', () => {
			const result = hasInput('');

			expect(result).toEqual(true);
		});

		test('isInput is false', () => {
			const result = hasInput(Symbol('input'));

			expect(result).toEqual(false);
		});
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
		const isChecked = Symbol('true');
		const results = toggleAllTodos(existingTodos, isChecked);

		results.map((result, index) => {
			expect(result).toEqual({
				...existingTodos[index], isCompleted: isChecked,
			});
		});
	});

	test('HasActiveTodos - Check whether any activeTodos present', () => {
		const result = hasNoActiveTodos(existingTodos);

		expect(result).toEqual(false);
	});

	test('HasNOTodos - Check whether the array is empty', () => {
		const result = hasNoTodos(existingTodos);

		expect(result).toEqual(false);
	});

	test('Remove Todo - removes the selected todo', () => {
		const afterTodoRemoval = removeTodo(existingTodos, impactedTodo);

		expect(afterTodoRemoval).toEqual([unImpactedTodo]);
	});

	test('HasCompletedTodos - checks whether todos are completed', () => {
		const result = hasCompletedTodos(existingTodos);

		expect(result).toEqual(true);
	});

	test('Clear Completed', () => {
		const clearcompleted = clearCompleted(existingTodos);

		expect(clearcompleted).toEqual(existingTodos);
	});

	test('TodosCount- Count the no of todos', () => {
		const result = getTodosCount(existingTodos);

		expect(result).toEqual(false);
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
			existingTodos[1],
		];

		expect(result).toEqual(expectation);
	});
});
