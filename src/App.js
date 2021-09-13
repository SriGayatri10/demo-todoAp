/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import textBox from './components/textBox';
import toggleAll from './components/toggleAll';
import todoList from './components/todoList';
import filterBar from './components/filterBar';
import clearCompleted from './components/clearCompleted';
import actionButton from './components/actionButton';

const App = () => {
	console.log(context.state);
	console.log(context.state.todos);
	return <span className="text-box">
		<span>{toggleAll()}</span>
		<span>{textBox()}</span>
		<span>{actionButton()}</span>
		<div> input: { context.state.input } </div>
		<div> Todos: {todoList()}</div>
		<div> {filterBar()}</div>
		<div> {clearCompleted()}</div>
	</span>;
};

export default App;
