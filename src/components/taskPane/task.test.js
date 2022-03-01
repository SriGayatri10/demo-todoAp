import { random } from '@laufire/utils';
import { fireEvent, render } from '@testing-library/react';
import Task from './task';

describe('Task', () => {
	const context = {
		actions: {
			addTaskTodo: jest.fn(),
			removeTask: jest.fn(),
		},
	};
	const sixteen = 16;
	const task = {
		id: '',
		text: random.rndString(sixteen),
	};

	test('Task displays the AddButton, text & RemoveButton', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('Task');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent(task.text);
	});

	test('AddButton adds task in todos & removes task from tasks', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('addButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(context.actions.addTaskTodo)
			.toHaveBeenCalledWith(task);
		expect(context.actions.removeTask)
			.toHaveBeenCalledWith(task);
	});

	test('RemoveButton removes that specific task from tasks', () => {
		const component = render(Task({ ...context, data: task }))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(context.actions.removeTask)
			.toHaveBeenCalledWith(task);
	});
});
