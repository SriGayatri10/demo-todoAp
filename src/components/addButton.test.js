import AddButton from './addButton';
import { render, fireEvent } from '@testing-library/react';

describe('AddButton', () => {
	const context = {
		actions: {
			addTodo: jest.fn(),
		},
		state: {
			input: Symbol('input'),
		},
	};

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
