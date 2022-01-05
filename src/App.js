/* eslint-disable no-mixed-spaces-and-tabs */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/taskManager';
import TaskPane from './components/taskPane';
import TodoPane from './components';
import Ticker from './services/ticker';
import context from './core/context';

const App = () => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(Ticker.start, []);
	  return <div>
		<span>{ TodoPane()}</span>
		<span>{TaskPane()}</span>
	</div>;
};

export default App;
