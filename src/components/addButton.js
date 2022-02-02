import { React } from 'react';

const AddButton = (context) => {
	const { state, actions } = context;

	return (
		<button
			role="addButton"
			disabled={ state.input === '' }
			onClick={ () => {
				actions.addTodo();
			} }
		>
			Add
		</button>

	);
};

export default AddButton;
