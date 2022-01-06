import TaskRetriver from './taskRetriver';
import { random } from '@laufire/utils';
import config from '../core/config';

test('GetTasks - get the tasks', () => {
	const count = 2;

	jest.spyOn(TaskRetriver, 'getTasks');
	jest.spyOn(random, 'rndBetween').mockReturnValue(count);

	const tasks = TaskRetriver.getTasks();

	expect(random.rndBetween).toHaveBeenCalledWith(0, config.minimumTaskCount);
	expect(tasks.length).toEqual(count);
	tasks.map(() => expect.any(String));
});
