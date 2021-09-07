/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { React } from 'react';
import filterButton from './filterButton.js';

const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];

	console.log(filters);

	return <div>{filters.map(filterButton)}</div>;
};

export default filterBar;
