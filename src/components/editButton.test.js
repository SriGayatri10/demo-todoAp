import { render, fireEvent } from '@testing-library/react';
import editButton from './editButton';

describe('editButton', () => {
	const context = {
		actions: {
			editTodo: jest.fn(),
		},
		state: {
			input: Symbol('input'),
		},
	};

	test('dom Check', () => {
		const component = render(editButton(context)).getByRole('editButton');

		expect(component).toHaveTextContent('edit');

		expect(component).toBeInTheDocument();
	});

	test('On Click', () => {
		const component = render(editButton(context)).getByRole('editButton');

		fireEvent.click(component);
		expect(context.actions.editTodo).toHaveBeenCalledWith();
	});
});
