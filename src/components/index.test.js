import { React } from 'react';
import TodoPane from './index';
import * as toggleAll from './toggleAll';
import * as textBox from './textBox';
import * as actionButton from './actionButton';
import * as todoList from './todoList';
import * as filterBar from './filterBar';
import * as clearCompleted from './clearCompleted';
import { render } from '@testing-library/react';

test('TodoPane', () => {
	const context = {
		state: {
			input: Symbol('input'),
		},
	};

	jest.spyOn(toggleAll, 'default')
		.mockReturnValue(<div role="toggleAll"/>);
	jest.spyOn(textBox, 'default').mockReturnValue(<div role="textBox"/>);
	jest.spyOn(actionButton, 'default')
		.mockReturnValue(<div role="actionButton"/>);
	jest.spyOn(todoList, 'default').mockReturnValue(<div role="todoList"/>);
	jest.spyOn(filterBar, 'default').mockReturnValue(<div role="filterBar"/>);
	jest.spyOn(clearCompleted, 'default')
		.mockReturnValue(<div role="clearCompleted"/>);

	const { getByRole } = render(TodoPane(context));

	expect(getByRole('TodoPane')).toBeInTheDocument();

	expect(getByRole('toggleAll')).toBeInTheDocument();
	expect(toggleAll.default).toHaveBeenCalledWith(context);

	expect(getByRole('textBox')).toBeInTheDocument();
	expect(textBox.default).toHaveBeenCalledWith(context);

	expect(getByRole('actionButton')).toBeInTheDocument();
	expect(actionButton.default).toHaveBeenCalledWith(context);

	expect(getByRole('todoList')).toBeInTheDocument();
	expect(todoList.default).toHaveBeenCalledWith(context);

	expect(getByRole('filterBar')).toBeInTheDocument();
	expect(filterBar.default).toHaveBeenCalledWith(context);

	expect(getByRole('clearCompleted')).toBeInTheDocument();
	expect(clearCompleted.default).toHaveBeenCalledWith(context);
});
