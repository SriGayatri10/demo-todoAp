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

		expect(component).toHaveTextContent('Add');

		expect(component).toBeInTheDocument();
	});

	test('AddButton On Click', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);
		expect(context.actions.addTodo).toHaveBeenCalledWith();
	});

	test('Disabled Condition - when value of disabled becomes true', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
	});
	test('Enabled Condition - when value of disabled becomes false', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).not.toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
	});
});
