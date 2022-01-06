import faker from 'faker';
import * as random from '@laufire/utils/random';
import config from '../core/config';

const toProperFormat = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperFormat(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTasks = () => {
	const count = random.rndBetween(0, config.minimumTaskCount);
	const tasks = [];

	for(let i = 0; i < count; i++)
		tasks.push(getRndTask());

	return tasks;
};

const TaskRetriver = {
	getTasks,
};

export default TaskRetriver;
