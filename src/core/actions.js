/* eslint-disable eqeqeq */
import config from './config';
import { rndString } from '@laufire/utils/random';

const setInput = ({ data }) => ({
	input: data,
});

const checkbox = ({ data }) => ({
	isCompleted: data != 0,
});

const todo = ({ state }) => ({
	todo: state.todo
		.concat({ id: rndString(config.refreshIDLength), text: state.input,
			isCompleted: state.isCompleted }),
});
const actions = {
	setInput,
	todo,
	checkbox,

};

export default actions;
