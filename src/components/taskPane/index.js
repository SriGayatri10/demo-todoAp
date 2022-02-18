import { React } from 'react';
import TaskList from './taskList';
import '../../App.scss';

const TaskPane = (context) =>
	<div className="taskPane" role="TaskPane">
		<h3>Task</h3>
		<div>{TaskList(context)}</div>
	</div>;

export default TaskPane;
