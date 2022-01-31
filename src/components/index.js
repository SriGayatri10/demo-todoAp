import { React } from 'react';
import toggleAll from './toggleAll';
import textBox from './textBox';
import actionButton from './actionButton';
import todoList from './todoList';
import filterBar from './filterBar';
import clearCompleted from './clearCompleted';

const TodoPane = (context) => {
	const { state } = context;

	return (
		<span role="TodoPane" className="todoPane">
			<span>{toggleAll(context)}</span>
			<span>{textBox(context)}</span>
			<span>{actionButton(context)}</span>
			<div> input: { state.input } </div>
			<div> Todos: {todoList(context)}</div>
			<div> {filterBar(context)}</div>
			<div> {clearCompleted(context)}</div>

		</span>
	);
};

export default TodoPane;
