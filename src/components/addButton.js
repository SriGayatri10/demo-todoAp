import { React } from 'react';
import TodoManager from '../services/todoManager';

const AddButton = (context) => {
	const { state, actions } = context;

	return (
		<button
			role="addButton"
			disabled={ TodoManager.hasInput(state.input) }
			onClick={ () => {
				actions.addTodo();
			} }
		>
			Add
		</button>

	);
};

export default AddButton;
