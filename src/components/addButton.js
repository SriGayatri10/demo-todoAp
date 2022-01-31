import { React } from 'react';
import context from '../core/context';

const AddButton = () =>
	<button
		role="addButton"
		disabled={ context.state.input === '' }
		onClick={ () => {
			context.actions.addTodo();
		} }
	>
		Add
	</button>;

export default AddButton;
