import { fireEvent, render } from '@testing-library/react';
import Task from './task';

describe('Task', () => {
	const context = {
		actions: {
			addTaskTodo: jest.fn(),
			removeTask: jest.fn(),
		},
	};
	const task = {
		id: '',
		text: 'Program circuit',
	};

	test('Displays the AddButton,text & RemoveButton', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('Task');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Program circuit');
	});

	test('OnClicking the AddButton', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('addButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(context.actions.addTaskTodo)
			.toHaveBeenCalledWith(task);
		expect(context.actions.removeTask)
			.toHaveBeenCalledWith(task);
		expect(component).toHaveTextContent('+');
	});

	test('OnClicking the RemoveButton', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(context.actions.removeTask)
			.toHaveBeenCalledWith(task);
		expect(component).toHaveTextContent('x');
	});
});
