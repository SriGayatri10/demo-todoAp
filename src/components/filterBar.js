import filterButton from './filterButton.js';

const filterBar = (context) => {
	const filters = ['All', 'Active', 'Completed'];

	return filters.map((filter) => filterButton({ ...context, data: filter }));
};

export default filterBar;
