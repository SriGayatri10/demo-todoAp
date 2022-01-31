import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const filterButton = (filter) => {
	const isTodos = TodoManager.getTodosCount(context.state.todos) === 0;

	return isTodos
		? null
		: <span role="filterButton">
			<button
				onClick={ () => context.actions.setFilter(filter) }
			>
				{filter}</button>
		</span>;
};

export default filterButton;
