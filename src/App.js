/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import Input from './components/textBox';
import SimpleButton from './components/simpleButton';
import todoDisplay from './components/todoDisplay';

const App = () => {
	console.log(context.state);
	console.log(context.state.todo);
	return <span className="text-box">
		<span>{Input()}</span>
		<span>{SimpleButton()}</span>
		<div> input: { context.state.input } </div>
		<div> Todos: { context.state.todo.map(todoDisplay) }</div>
	</span>;
};

export default App;
