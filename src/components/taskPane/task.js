import { React } from 'react';
import context from '../../core/context';

const addButton = (task) =>
	<button
		onClick={ () => {
			context.actions.addTaskTodo(task);
		} }
	> + </button>;

const removeButton = () =>
	<button> x </button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{addButton(task)}</span>
		<span>{text}</span>
		<span>{removeButton()}</span></div>;
};

export default Task;
