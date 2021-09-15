/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const getEnterKeyAction = () =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterKeyAction()](),
	Escape: () => context.actions.setInput(''),
};

const textBox = () =>
	<input
		type="text"
		 value={ context.state.input }
		onChange={ (evt) => {
			//  console.log(evt);
			context.actions.setInput(evt.target.value);
		} }
		onKeyUp={ (evt) => {
			// console.log(evt.code);
			actionKeys[evt.code] && actionKeys[evt.code]();
		} }
	/>;

export default textBox;
