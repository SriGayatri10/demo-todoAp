import { React } from 'react';
import TaskList from './taskList';
import '../../App.scss';

const TaskPane = () =>
	<div className="taskPane">
		<h3>Task</h3>
		<div>{TaskList()}</div>
	</div>;

export default TaskPane;
