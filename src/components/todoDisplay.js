import { React } from 'react';
import context from '../core/context';

const todoDisplay = (todo) => <div key={ todo.id }>
	<input
		type="checkbox"
		checked={ todo.isCompleted }
		onChange={ () => context.actions.toggleTodo(todo) }
	/>
	<span onClick={ () => context.actions.setEditing(todo) }>
		{ todo.text }
	</span>
	<span>
		<button onClick={ () => context.actions.removeTodo(todo) }>X</button>
	</span>
</div>;

export default todoDisplay;
