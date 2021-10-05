import context from '../core/context';
import config from '../core/config';
import TaskRetriver from './taskRetriver';

const start = () => {
	const { tickerDelay } = config;
	const { addTask } = context.actions;

	return setInterval(() => TaskRetriver.getTask().map(addTask), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
