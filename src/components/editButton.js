import { React } from 'react';
import TodoManager from '../services/todoManager';

const editButton = (context) => {
	const { state, actions } = context;

	return (
		<button
			role="editButton"
			disabled={ TodoManager.hasInput(state.input) }
			onClick={ () => actions.editTodo() }
		>
			edit
		</button>);
};

export default editButton;
