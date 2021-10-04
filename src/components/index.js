import { React } from 'react';
import toggleAll from './toggleAll';
import textBox from './textBox';
import actionButton from './actionButton';
import todoList from './todoList';
import filterBar from './filterBar';
import clearCompleted from './clearCompleted';
import context from '../core/context';

const TodoPane = () => <span className="todoPane">
	<span>{toggleAll()}</span>
	<span>{textBox()}</span>
	<span>{actionButton()}</span>
	<div> input: { context.state.input } </div>
	<div> Todos: {todoList()}</div>
	<div> {filterBar()}</div>
	<div> {clearCompleted()}</div>
</span>;

export default TodoPane;
