import { React } from 'react';

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{text}</span></div>;
};

export default Task;
