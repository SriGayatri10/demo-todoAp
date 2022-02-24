/* eslint-disable max-len */
import textBox from './textBox';
import { random } from '@laufire/utils';
import { fireEvent, render } from '@testing-library/react';

describe('TextBox', () => {
	const context = {
		state: {
			input: '',
		},
		actions: {
			setInput: jest.fn(),
			editTodo: jest.fn(),
			addTodo: jest.fn(),
		},
	};

	test('TextBox to be in the Document', () => {
		const component = render(textBox(context)).getByRole('textBox');

		expect(component).toBeInTheDocument();
	});

	test('setInput - to set the input', () => {
		const value = 'Hi';
		const component = render(textBox(context)).getByRole('textBox');

		fireEvent.change(component, { target: {
			value,
		}});

		expect(context.actions.setInput)
			.toHaveBeenCalledWith(value);
	});

	test('No actions should be performed when key is neither enter nor escape', () => {
		const code = random.rndString(1);
		const component = render(textBox(context)).getByRole('textBox');

		fireEvent.keyUp(component, { code });

		expect(context.actions.addTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.editTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.setInput).not.toHaveBeenCalledWith(context);
	});
});
describe('Action Keys', () => {
	test('Enter key - to edit the Todo', () => {
		const context = {
			state: {
				editing: true,
			},
			actions: {
				editTodo: jest.fn(),

			},
		};
		const code = 'Enter';
		const component = render(textBox(context)).getByRole('textBox');

		fireEvent.keyUp(component, { code });
		expect(context.actions.editTodo)
			.toHaveBeenCalledWith(context);
	});

	test('Enter key - to add the Todo', () => {
		const context = {
			state: {
				editing: false,
			},
			actions: {
				addTodo: jest.fn(),
			},
		};

		const code = 'Enter';
		const component = render(textBox(context)).getByRole('textBox');

		fireEvent.keyUp(component, { code });
		expect(context.actions.addTodo)
			.toHaveBeenCalledWith(context);
	});

	test('Escape key - to set the input to be an empty string', () => {
		const context = {
			state: {
				input: '',
			},
			actions: {
				setInput: jest.fn(),
			},
		};

		const code = 'Escape';
		const component = render(textBox(context)).getByRole('textBox');

		fireEvent.keyUp(component, { code });

		expect(context.actions.setInput)
			.toHaveBeenCalledWith('');
	});
});
