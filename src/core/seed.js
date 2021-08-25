import config from './config';
import { rndString } from '@laufire/utils/random';

const seed = {
	count: config.countStart,
	refreshID: rndString(config.refreshIDLength),
	input: '',
	todo: [],
	isCompleted: false,
};

export default seed;
