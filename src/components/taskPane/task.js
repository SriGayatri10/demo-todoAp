import { React } from 'react';
import context from '../../core/context';

const addButton = (task) =>
	<button
		onClick={ () => {
			context.actions.addTaskTodo(task);
			context.actions.removeTask(task);
		} }
	> + </button>;

const removeButton = (task) =>
	<button
		onClick={ () => context.actions.removeTask(task) }
	> x </button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{addButton(task)}</span>
		<span>{text}</span>
		<span>{removeButton(task)}</span></div>;
};

export default Task;
