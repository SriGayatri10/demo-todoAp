import { React } from 'react';

const addButton = () =>
	<button> + </button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{addButton()}</span>
		<span>{text}</span></div>;
};

export default Task;
