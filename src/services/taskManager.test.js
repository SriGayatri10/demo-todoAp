/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import TaskManager from './taskManager';
import { random } from '@laufire/utils';
import config from '../core/config';

describe('taskManager', () => {
	const { addTask, removeTask, init } = TaskManager;

	const getId = () => Symbol('id');
	const getText = () => Symbol('text');
	const	existingTaskIdOne	= getId();
	const	existingTaskIdTwo = getId();
	const	existingTaskTextOne = getText() ;
	const	existingTaskTextTwo = getText();

	const existingTasks = [
		{
			id: existingTaskIdOne,
			text: existingTaskTextOne,
		},
		{
			id: existingTaskIdTwo,
			text: existingTaskTextTwo,
		},
	];

	const [impactedTask, unImpactedTask] = existingTasks;

	test('Add Task', () => {
		const id = getId();
		const text = getText();

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = addTask(existingTasks, text);

		expect(random.rndString).toHaveBeenCalledWith(config.idLength);

		expect(result).toEqual([
			...existingTasks,
			{ id, text },
		]);
	});

	test('Remove Task - removes the selected task', () => {
		const afterTaskRemoval = removeTask(existingTasks, impactedTask);

		expect(afterTaskRemoval).toEqual([unImpactedTask]);
	});

	test('Init - initiate the task', () => {
		const context = {
			actions: {
				addTask: () => {},
			},
		};

		jest.spyOn(context.actions, 'addTask');

		init(context);
		const tasks = ['Task1', 'Task2', 'Task3'];

		tasks.map((task) => expect(context.actions.addTask)
			.toHaveBeenCalledWith(task));
	});
});
