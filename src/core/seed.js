import config from './config';

const seed = {
	count: config.countStart,
	refreshID: '',
	input: '',
	todos: [],
	filter: 'All',
	editing: null,
	tasks: [],
};

export default seed;
