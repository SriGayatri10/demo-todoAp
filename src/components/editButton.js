import { React } from 'react';

const editButton = (context) => {
	const { state, actions } = context;

	return (
		<button
			role="editButton"
			disabled={ state.input === '' }
			onClick={ () => actions.editTodo() }
		>
			edit
		</button>);
};

export default editButton;
