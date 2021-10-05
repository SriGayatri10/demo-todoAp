import faker from 'faker';
import { rndBetween } from '@laufire/utils/random';
import config from '../core/config';

const toProperFormart = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperFormart(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTask = () => {
	const count = rndBetween(0, config.minimumTaskCount);
	const tasks = [];

	for(let i = 0; i < count; i++)
		tasks.push(getRndTask());

	return tasks;
};

const TaskRetriver = {
	getTask,
};

export default TaskRetriver;
