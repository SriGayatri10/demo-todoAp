/* eslint-disable no-magic-numbers */

import TaskManager from './taskManager';

describe('taskManager', () => {
	const { addTask } = TaskManager;

	test('Add Task', () => {
		const result = addTask([
			{ id: 'ARF', text: 'Copy bandwidth.' },
			{ id: 'ROB', text: 'Copy capacitor.' },
		], 'Parse sensor.');

		expect(result).toEqual([
			{ id: 'ARF', text: 'Copy bandwidth.' },
			{ id: 'ROB', text: 'Copy capacitor.' },
			{ id: expect.any(String), text: 'Parse sensor.' },
		]);
	});
});
