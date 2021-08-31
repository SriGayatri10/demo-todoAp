import { React } from 'react';
import context from '../core/context';

const todoDisplay = (todo) =>
	<div key={ todo.id }>
		<input
			type="checkbox"
			checked={ todo.isCompleted }
			onChange={ () => context.actions.toggleTodo(todo) }
		/>
		<span>{todo.text} </span>
	</div>;

export default todoDisplay;
