import todoDisplay from './todoDisplay';
import { fireEvent, render } from '@testing-library/react';

describe('TodoDisplay', () => {
	const context = {
		actions: {
			toggleTodo: jest.fn(),
			setEditing: jest.fn(),
			removeTodo: jest.fn(),
		},
	};
	const todo = {
		id: expect.any(String),
		text: Symbol('text'),
		isCompleted: false,
	};
	const { actions } = context;

	test('Displays checkbox, text & removeButton', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('todoDisplay');

		expect(component).toBeInTheDocument();
	});

	test('toggleTodo - toggles the todo', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('toggleTodo');

		fireEvent.click(component);

		expect(actions.toggleTodo).toHaveBeenCalledWith(todo);
	});

	test('setEditing - edits the todo', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('setEditing');

		fireEvent.click(component);

		expect(actions.setEditing).toHaveBeenCalledWith(todo);
	});

	test('removeTodo- removes the particular todo from the document', () => {
		const component = render(todoDisplay({ ...context, data: todo }))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(actions.removeTodo).toHaveBeenCalledWith(todo);
	});
});
