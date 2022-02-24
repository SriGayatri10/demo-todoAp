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

	test('To display editButton', () => {
		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).toHaveTextContent('edit');

		expect(component).toBeInTheDocument();
	});

	test('OnClicking the EditButton', () => {
		const component = render(editButton(context))
			.getByRole('editButton');

		fireEvent.click(component);
		expect(context.actions.editTodo).toHaveBeenCalledWith();
	});

	test('Disabled Condition - when value of disabled becomes true', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(true);

		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
	});
	test('Enabled Condition - when value of disabled becomes false', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(false);

		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).not.toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context.state.input);
	});
});
