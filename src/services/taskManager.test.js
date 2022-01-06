/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import TaskManager from './taskManager';
import { random } from '@laufire/utils';
import config from '../core/config';

describe('taskManager', () => {
	const { addTask, removeTask, init } = TaskManager;

	const existingTasks = [
		{
			id: Symbol('id'),
			text: Symbol('text'),
		},
		{
			id: Symbol('id'),
			text: Symbol('text'),
		},
	];

	const [impactedTask, unImpactedTask] = existingTasks;

	test('Add Task', () => {
		const id = Symbol('id');
		const text = Symbol('text');

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const expectation = [
			...existingTasks,
			{ id, text },
		];
		const result = addTask(existingTasks, text);

		expect(random.rndString).toHaveBeenCalledWith(config.idLength);

		expect(result).toEqual(expectation);
	});

	test('Remove Task - removes the selected task', () => {
		const expectation = [unImpactedTask];
		const result = removeTask(existingTasks, impactedTask);

		expect(result).toEqual(expectation);
	});

	test('Init - initiate the task', () => {
		const context = {
			actions: {
				addTask: () => {},
			},
		};
		const tasks = ['Task1', 'Task2', 'Task3'];

		jest.spyOn(context.actions, 'addTask');

		init(context);

		tasks.map((task) => expect(context.actions.addTask)
			.toHaveBeenCalledWith(task));
	});
});
