/* eslint-disable max-len */
import TodoManager from '../services/todoManager';
import filterButton from './filterButton';
import { fireEvent, render } from '@testing-library/react';

describe('FilterButton', () => {
	const context = {
		actions: {
			setFilter: jest.fn(),
		},
		state: {
			todos: [],
		},
	};

	test('filterButtons is not visible when no todos present', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(true);
		const component = filterButton({ ...context, data: Symbol('filter') });

		expect(component).not.toBeInTheDocument();
		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
	});

	test('filterButtons is visible when one or more todos present ', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		const component = render(filterButton({ ...context, data: Symbol('filter') }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).toBeInTheDocument();
	});
	test('Displays All Button', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		const component = render(filterButton({ ...context, data: 'All' }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
		fireEvent.click(component);
		expect(component).toHaveTextContent('All');
		expect(context.actions.setFilter).toHaveBeenCalledWith('All');
	});

	test('Displays Active Button', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		const component = render(filterButton({ ...context, data: 'Active' }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
		fireEvent.click(component);
		expect(component).toHaveTextContent('Active');
	});

	test('Displays Completed Button', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		const component = render(filterButton({ ...context, data: 'Completed' }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
		fireEvent.click(component);
		expect(component).toHaveTextContent('Completed');
	});
});
