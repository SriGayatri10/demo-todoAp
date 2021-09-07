/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import AddButton from './components/addButton';
import textBox from './components/textBox';
import toggleAll from './components/toggleAll';
import todoList from './components/todoList';

const App = () => {
	console.log(context.state);
	console.log(context.state.todos);
	return <span className="text-box">
		<span>{toggleAll()}</span>
		<span>{textBox()}</span>
		<span>{AddButton()}</span>
		<div> input: { context.state.input } </div>
		<div> Todos: {todoList()}</div>
	</span>;
};

export default App;
