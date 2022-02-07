/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import TodoManager from '../services/todoManager';

const toggleAll = (context) => {
	const isChecked = TodoManager.hasNoActiveTodos(context.state.todos);
	const noToDos = TodoManager.hasNoTodos(context.state.todos);

	return noToDos
		? null
		: <input
			role="toggleAll"
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleAllTodos(!isChecked) }
		  />;
};

export default toggleAll;
