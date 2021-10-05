/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import context from './core/context';
import TaskManager from './services/taskManager';
import TaskPane from './components/taskPane';
import TodoPane from './components';
import Ticker from './services/ticker';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);
	console.log(context.state);
	console.log(context.state.todos);
	  return <div>
		<span>{ TodoPane()}</span>
		<span>{TaskPane()}</span>
	</div>;
};

export default App;
