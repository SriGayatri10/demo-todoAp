/* eslint-disable max-lines-per-function */
import { React } from 'react';
import { render } from '@testing-library/react';
import actionButton from './actionButton';
import * as editButton from './editButton';
import * as AddButton from './addButton';

describe('ActionButton', () => {
	test('EditButton', () => {
		const context = {
			state: {
				editing: true,
			},
		};

		jest.spyOn(editButton, 'default')
			.mockReturnValue(<div role="editButton"/>);
		const { getByRole } = render(actionButton(context));

		expect(getByRole('editButton')).toBeInTheDocument();
		expect(editButton.default).toHaveBeenCalledWith(context);
	});
	test('AddButton', () => {
		const context = {
			state: {
				editing: false,
			},
		};

		jest.spyOn(AddButton, 'default')
			.mockReturnValue(<div role="AddButton"/>);
		const { getByRole } = render(actionButton(context));

		expect(getByRole('AddButton')).toBeInTheDocument();
		expect(AddButton.default).toHaveBeenCalledWith(context);
	});
});
