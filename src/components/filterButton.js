import { React } from 'react';

import TodoManager from '../services/todoManager';

const filterButton = ({ actions, state, data: filter }) => {
	const isTodos = TodoManager.getTodosCount(state.todos);

	return isTodos
		? null
		: <span>
			<button
				role="filterButton"
				onClick={ () => actions.setFilter(filter) }
			>
				{filter}</button>
		</span>;
};

export default filterButton;
