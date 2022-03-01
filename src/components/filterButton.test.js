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
	const filter = Symbol('filter');

	test('FilterButtons is not visible when no todo is present', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(true);

		const component = filterButton({ ...context, data: filter });

		expect(component).not.toBeInTheDocument();
		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
	});

	test('FilterButtons is visible when one or more todos present ', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		// eslint-disable-next-line max-len
		const component = render(filterButton({ ...context, data: filter }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).toBeInTheDocument();
	});

	test('Displays All, Active & Completed Button ', () => {
		jest.spyOn(TodoManager, 'getTodosCount')
			.mockReturnValue(false);

		const component = render(filterButton({ ...context, data: filter }))
			.getByRole('filterButton');

		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);

		fireEvent.click(component);

		expect(context.actions.setFilter).toHaveBeenCalledWith(filter);
	});
});
