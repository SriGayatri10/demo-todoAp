import config from '../core/config';
import TaskRetriver from './taskRetriver';

const start = (context) => {
	const { tickerDelay } = config;
	const { addTask } = context.actions;
	const { fn } = context;

	setInterval(() =>
		TaskRetriver.getTasks().map(addTask)
			.map(fn), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
