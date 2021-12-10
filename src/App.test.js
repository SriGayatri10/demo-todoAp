/* eslint-disable react/display-name */
import React from 'react';
import { render } from '@testing-library/react';

// NOTE: automock from jest config doesn't work on apps created with create-react-app.
jest.mock('./components', () => () => <div role="todoPane"/>);
jest.mock('./components/taskPane', () => () => <div role="taskPane"/>);

import App from './App';
import TaskManager from './services/taskManager';
import Ticker from './services/ticker';

test('renders learn react link', () => {
	jest.spyOn(React, 'useEffect');
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(TaskManager, 'init').mockReturnValue();

	const { getByRole } = render(<App/>);

	expect(React.useEffect).toHaveBeenCalledWith(Ticker.start, []);
	expect(React.useEffect).toHaveBeenCalledWith(TaskManager.init, []);

	expect(getByRole('todoPane')).toBeInTheDocument();
	expect(getByRole('taskPane')).toBeInTheDocument();
});
