/* eslint-disable max-len */
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

	test('ToggleAll is not visible when no ToDos are selected', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(true);

		const component = toggleAll(context);

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context.state.todos);
		expect(component).not.toBeInTheDocument();
	});

	describe('ToggleAll is visible when some ToDos are selected', () => {
		test('Dom check', () => {
			jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);
			const component = render(toggleAll(context))
				.getByRole('toggleAll');

			expect(TodoManager.hasNoTodos)
				.toHaveBeenCalledWith(context.state.todos);
			expect(component).toBeInTheDocument();
		});
		describe('On Click', () => {
			test('when toggleAll is selected,all todos are selected & vice verse', () => {
				const isChecked = false;

				jest.spyOn(TodoManager, 'hasNoActiveTodos')
					.mockReturnValue(isChecked);
				jest.spyOn(TodoManager, 'hasNoTodos')
					.mockReturnValue(false);

				const component = render(toggleAll(context))
					.getByRole('toggleAll');

				fireEvent.click(component);

				expect(TodoManager.hasNoActiveTodos)
					.toHaveBeenCalledWith(context.state.todos);
				expect(context.actions.toggleAllTodos)
					.toHaveBeenCalledWith(!isChecked);
			});

			test('when toggleAll is unselected, all todos are unselected &', () => {
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

				expect(context.actions.toggleAllTodos)
					.toHaveBeenCalledWith(!isChecked);
			});
		});
	});
});
