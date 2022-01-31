/* eslint-disable no-mixed-spaces-and-tabs */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/taskManager';
import TaskPane from './components/taskPane';
import TodoPane from './components';
import Ticker from './services/ticker';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	  return <div>
		<span>{ TodoPane(context)}</span>
		<span>{TaskPane(context)}</span>
	</div>;
};

export default App;
