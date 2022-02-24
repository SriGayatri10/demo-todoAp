/* eslint-disable no-unused-expressions */
import todoDisplay from './todoDisplay';
import { fireEvent, render } from '@testing-library/react';

describe('TodoDisplay with checkbox,text & removeButton', () => {
	const context = {
		actions: {
			toggleTodo: jest.fn(),
			setEditing: jest.fn(),
			removeTodo: jest.fn(),
		},
	};
	const todo = {
		id: expect.any(String),
		text: 'Hi',
		isCompleted: false,
	};
	const { actions } = context;

	test('todoDisplay-displays the todo', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('todoDisplay');

		expect(component).toBeInTheDocument();
	});

	test('toggleTodo', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('toggleTodo');

		fireEvent.click(component);

		expect(actions.toggleTodo).toHaveBeenCalledWith(todo);
	});

	test('setEditing - edits the todo present', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('setEditing');

		fireEvent.click(component);

		expect(actions.setEditing).toHaveBeenCalledWith(todo);
		expect(component).toHaveTextContent('Hi');
	});

	test('removeTodo- removes the particular todo from the document', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(component).toHaveTextContent('X');
		expect(actions.removeTodo).toHaveBeenCalledWith(todo);
	});
});
