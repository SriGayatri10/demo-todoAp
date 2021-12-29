/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const clearCompleted = () => {
	const notCompleted = TodoManager.getCompletedCount(context.state.todos)
	 === 0;

	return notCompleted
		? null
		: <button onClick={ () =>
			context.actions.getClearCompleted() }
		  >clearcompleted</button>;
};

export default clearCompleted;
