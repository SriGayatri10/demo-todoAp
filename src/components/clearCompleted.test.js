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

	test('notCompleted is true', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodos')
			.mockReturnValue(true);

		const component = clearCompleted(context);

		expect(component).not.toBeInTheDocument();
		expect(TodoManager.hasCompletedTodos)
			.toHaveBeenCalledWith(context.state.todos);
	});

	describe('notCompleted is false', () => {
		test('Dom Check', () => {
			jest.spyOn(TodoManager, 'hasCompletedTodos')
				.mockReturnValue(false);

			const component = render(clearCompleted(context))
				.getByRole('clearCompleted');

			expect(component).toBeInTheDocument();
			expect(component).toHaveTextContent('clearcompleted');
			expect(TodoManager.hasCompletedTodos)
				.toHaveBeenCalledWith(context.state.todos);
		});

		test('On Click', () => {
			jest.spyOn(TodoManager, 'hasCompletedTodos')
				.mockReturnValue(false);

			const component = render(clearCompleted(context))
				.getByRole('clearCompleted');

			fireEvent.click(component);
			expect(context.actions.getClearCompleted)
				.toHaveBeenCalledWith();
			expect(TodoManager.hasCompletedTodos)
				.toHaveBeenCalledWith(context.state.todos);
		});
	});
});
