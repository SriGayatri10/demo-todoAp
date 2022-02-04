import AddButton from './addButton';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../services/todoManager';

describe('AddButton', () => {
	const context = {
		actions: {
			addTodo: jest.fn(),
		},
		state: {
			input: Symbol('input'),
		},
	};

	describe('To check onClick', () => {
		test('dom Check', () => {
			const component = render(AddButton(context)).getByRole('addButton');

			expect(component).toHaveTextContent('Add');

			expect(component).toBeInTheDocument();
		});

		test('On Click', () => {
			const component = render(AddButton(context)).getByRole('addButton');

			fireEvent.click(component);
			expect(context.actions.addTodo).toHaveBeenCalledWith();
		});
	});

	describe('Disable Check', () => {
		test('Disabled Condition - disabled is true', () => {
			jest.spyOn(TodoManager, 'hasInput')
				.mockReturnValue(true);

			const component = render(AddButton(context)).getByRole('addButton');

			expect(component).toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
		test('Enable Condition - disabled is false', () => {
			jest.spyOn(TodoManager, 'hasInput')
				.mockReturnValue(false);

			const component = render(AddButton(context)).getByRole('addButton');

			expect(component).not.toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
	});
});
