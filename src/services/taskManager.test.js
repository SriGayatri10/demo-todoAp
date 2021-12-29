/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */

import TaskManager from './taskManager';
import { random } from '@laufire/utils';
import config from '../core/config';

describe('taskManager', () => {
	const { addTask, removeTask } = TaskManager;

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
		const afterTaskRemoval = removeTask(existingTasks, existingTasks[0]);

		expect(afterTaskRemoval).toEqual([existingTasks[1]]);
	});
});
