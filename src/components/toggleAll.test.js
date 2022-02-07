import TodoManager from '../services/todoManager';
import { fireEvent, render } from '@testing-library/react';
import toggleAll from './toggleAll';

describe('ToggleAll', () => {
	const context = {
		state: {
			todos: [],
		},
		actions: {
			toggleAllTodos: jest.fn(),
		},
	};

	test('when no ToDos are selected', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(true);

		const component = toggleAll(context);

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).not.toBeInTheDocument();
	});

	describe('when some ToDos are selected', () => {
		test('Dom check', () => {
			jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);
			const component = render(toggleAll(context))
				.getByRole('toggleAll');

			expect(TodoManager.hasNoTodos)
				.toHaveBeenCalledWith(context.state.todos);
			expect(component).toBeInTheDocument();
		});
		describe('On Click', () => {
			test('when todos are completed', () => {
				const isChecked = false;

				jest.spyOn(TodoManager, 'hasNoActiveTodos')
					.mockReturnValue(isChecked);
				jest.spyOn(TodoManager, 'hasNoTodos')
					.mockReturnValue(false);

				const component = render(toggleAll(context))
					.getByRole('toggleAll');

				fireEvent.click(component);

				expect(component).toBeInTheDocument();
				expect(TodoManager.hasNoActiveTodos)
					.toHaveBeenCalledWith(context.state.todos);
				expect(TodoManager.hasNoTodos)
					.toHaveBeenCalledWith(context.state.todos);
				expect(context.actions.toggleAllTodos)
					.toHaveBeenCalledWith(!isChecked);
			});

			test('when todos are active', () => {
				const isChecked = true;

				jest.spyOn(TodoManager, 'hasNoActiveTodos')
					.mockReturnValue(isChecked);
				jest.spyOn(TodoManager, 'hasNoTodos')
					.mockReturnValue(false);

				const component = render(toggleAll(context))
					.getByRole('toggleAll');

				fireEvent.click(component);

				expect(TodoManager.hasNoActiveTodos)
					.toHaveBeenLastCalledWith(context.state.todos);
				expect(TodoManager.hasNoTodos)
					.toHaveBeenCalledWith(context.state.todos);
				expect(context.actions.toggleAllTodos)
					.toHaveBeenCalledWith(!isChecked);
			});
		});
	});
});
