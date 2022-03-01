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

	test('idle AddButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('Clicking AddButton creates a new todo in todos', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addTodo).toHaveBeenCalledWith();
	});

	test('AddButton under disabled condition', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
		expect(component).toBeDisabled();
	});

	test('AddButton under enabled condition', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
		expect(component).not.toBeDisabled();
	});
});
