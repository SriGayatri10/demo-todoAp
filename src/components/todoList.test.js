import TodoManager from '../services/todoManager';
import todoList from './todoList';
import { React } from 'react';
import { render } from '@testing-library/react';
import * as todoDisplay from './todoDisplay';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

test('TodoList', () => {
	const context = {
		state: {
			filter: Symbol('filter'),
			todos: Symbol('todos'),
		},
	};

	const filteredTodo = range(1, rndBetween()).map(Symbol);

	jest.spyOn(TodoManager, 'setFilter')
		.mockReturnValue(filteredTodo);
	jest.spyOn(todoDisplay, 'default')
		.mockReturnValue(<div role="todoDisplay"/>);

	const { getAllByRole } = render(todoList(context));

	expect(TodoManager.setFilter)
		.toHaveBeenCalledWith(context.state.todos, context.state.filter);
	filteredTodo.map((todo, index) => {
		expect(todoDisplay.default)
			.toHaveBeenCalledWith({ ...context, data: todo });
		expect(getAllByRole('todoDisplay')[index]).toBeInTheDocument();
	});
});
