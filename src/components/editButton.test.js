import { render, fireEvent } from '@testing-library/react';
import editButton from './editButton';
import TodoManager from '../services/todoManager';

describe('editButton', () => {
	const context = {
		actions: {
			editTodo: jest.fn(),
		},
		state: {
			input: Symbol('input'),
		},
	};

	describe('To check onClick', () => {
		test('dom Check', () => {
			const component = render(editButton(context))
				.getByRole('editButton');

			expect(component).toHaveTextContent('edit');

			expect(component).toBeInTheDocument();
		});

		test('On Click', () => {
			const component = render(editButton(context))
				.getByRole('editButton');

			fireEvent.click(component);
			expect(context.actions.editTodo).toHaveBeenCalledWith();
		});
	});
	describe('Disable Check', () => {
		test('Disabled Condition - disabled is true', () => {
			jest.spyOn(TodoManager, 'hasInput')
				.mockReturnValue(true);

			const component = render(editButton(context))
				.getByRole('editButton');

			expect(component).toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
		test('Enable Condition - disabled is false', () => {
			jest.spyOn(TodoManager, 'hasInput')
				.mockReturnValue(false);

			const component = render(editButton(context))
				.getByRole('editButton');

			expect(component).not.toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
	});
});
