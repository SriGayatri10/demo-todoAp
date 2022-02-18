
import Task from './task.js';

const TaskList = (context) => {
	const { tasks } = context.state;

	return tasks.map((eachTask) => Task({ ...context, data: eachTask }));
};

export default TaskList;
