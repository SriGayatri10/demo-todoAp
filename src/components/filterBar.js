import { React } from 'react';
import filterButton from './filterButton.js';

const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];

	return <div role="filterBar">{filters.map(filterButton)}</div>;
};

export default filterBar;
