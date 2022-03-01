import { React } from 'react';
import * as filterButton from './filterButton';
import { render } from '@testing-library/react';
import filterBar from './filterBar';

test('FilterBar displays the filterButtons', () => {
	const context = {
		actions: {},
		state: {},
	};
	const filters = ['All', 'Active', 'Completed'];

	jest.spyOn(filterButton, 'default')
		.mockReturnValue(<div role="filterButton"/>);

	const { getAllByRole } = render(filterBar(context));

	filters.map((filter, index) => {
		expect(filterButton.default)
			.toHaveBeenCalledWith({ ...context, data: filter });
		expect(getAllByRole('filterButton')[index]).toBeInTheDocument();
	});
});
