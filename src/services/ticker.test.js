/* eslint-disable max-statements */
/* eslint-disable object-shorthand */
import TaskRetriver from './taskRetriver';
import Ticker from './ticker';
import config from '../core/config';

test('Ticker ', () => {
	const addTask = Symbol('addTask');
	const fn = Symbol('fn');

	const context = {
		fn,
		actions: { addTask },
	};

	const tasks = { map: jest.fn() };
	const addedTasks = { map: jest.fn() };
	const setIntervalMock = (Fn) => Fn();

	jest.spyOn(TaskRetriver, 'getTasks').mockReturnValue(tasks);
	jest.spyOn(tasks, 'map').mockReturnValue(addedTasks);
	jest.spyOn(global, 'setInterval').mockImplementation(setIntervalMock);

	Ticker.start(context);

	expect(global.setInterval)
		.toHaveBeenCalledWith(expect.any(Function), config.tickerDelay);
	expect(TaskRetriver.getTasks).toHaveBeenCalledWith();
	expect(tasks.map).toHaveBeenCalledWith(addTask);
});
