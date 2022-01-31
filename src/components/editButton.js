import { React } from 'react';
import context from '../core/context';

const editButton = () =>
	<button
		role="editButton"
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.editTodo() }
	>
		edit</button>;

export default editButton;
