import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const addTodo = (state) =>
	state.todos.concat({ id: rndString(config.refreshIDLength),
		text: state.input, isCompleted: false });

const TodoManager = {
	addTodo,
};

export default TodoManager;
