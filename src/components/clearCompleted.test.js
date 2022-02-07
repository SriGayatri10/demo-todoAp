import TodoManager from '../services/todoManager';
import clearCompleted from './clearCompleted';
import { fireEvent, render } from '@testing-library/react';

describe('clearCompleted', () => {
	const context = {
		state: {
			todos: Symbol('todos'),
		},
		actions: {
			getClearCompleted: jest.fn(),
		},
	};

	test('Not visible when no todos are completed', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodos')
			.mockReturnValue(true);

		const component = clearCompleted(context);

		expect(TodoManager.hasCompletedTodos)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).not.toBeInTheDocument();
	});

	test('Visible when some todos are completed', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodos')
			.mockReturnValue(false);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		expect(TodoManager.hasCompletedTodos)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('clearcompleted');
	});

	test('Clears all completed todos when clicked', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodos')
			.mockReturnValue(false);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		fireEvent.click(component);

		expect(TodoManager.hasCompletedTodos)
			.toHaveBeenCalledWith(context.state.todos);
		expect(context.actions.getClearCompleted)
			.toHaveBeenCalledWith();
	});
});
