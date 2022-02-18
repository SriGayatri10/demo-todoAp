import { React } from 'react';

const addButton = (actions, task) =>
	<button
		role="addButton"
		onClick={ () => {
			actions.addTaskTodo(task);
			actions.removeTask(task);
		} }
	> + </button>;

const removeButton = (actions, task) =>
	<button
		role="removeButton"
		onClick={ () => actions.removeTask(task) }
	> x </button>;

const Task = ({ actions, data: task }) => {
	const { id, text } = task;

	return <div key={ id } role="Task">
		<span>{addButton(actions, task)}</span>
		<span>{text}</span>
		<span>{removeButton(actions, task)}</span></div>;
};

export default Task;
