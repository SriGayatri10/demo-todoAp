import context from '../core/context';
import { rndString } from '@laufire/utils/random';

const getTask = (text) => ({
	id: rndString(context.config.idLength),
	text: text,
});

const init = () => {
	context.actions.addTask('Task1');
	context.actions.addTask('Task2');
	context.actions.addTask('Task3');
};

const addTask = (tasks, task) => tasks.concat(getTask(task));

const removeTask = (tasks, data) => tasks.filter((task) => task.id !== data.id);

const TaskManager = {
	init,
	addTask,
	removeTask,
};

export default TaskManager;
