/* eslint-disable max-len */
import { React } from 'react';

const todoDisplay = ({ actions, data: todo }) => <div key={ todo.id }role="todoDisplay">
	<input
		role="toggleTodo"
		type="checkbox"
		checked={ todo.isCompleted }
		onChange={ () => actions.toggleTodo(todo) }
	/>
	<span
		role="setEditing"
		onClick={ () => actions.setEditing(todo) }
	>
		{ todo.text }
	</span>
	<span role="removeTodo">
		<button role="removeButton" onClick={ () => actions.removeTodo(todo) }>X</button>
	</span>
</div>;

export default todoDisplay;
