/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const clearCompleted = () => {
	const notCompleted = TodoManager.getClearCompletedCount(context.state.todos)
	 === 0;

	return notCompleted
		? null
		: <button onClick={ () =>
			context.actions.getClearCompleted() }
		  >completed</button>;
};

export default clearCompleted;
