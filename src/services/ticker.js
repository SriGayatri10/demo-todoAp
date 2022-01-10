import config from '../core/config';
import TaskRetriver from './taskRetriver';

const start = (context) => {
	const { tickerDelay } = config;
	const { addTask } = context.actions;

	setInterval(() => TaskRetriver.getTasks().map(addTask), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
