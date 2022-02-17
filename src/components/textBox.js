/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};

const textBox = (context) =>
	<input
		role="textBox"
		type="text"
		 value={ context.state.input }
		onChange={ (evt) => {
			context.actions.setInput(evt.target.value);
		} }
		onKeyUp={ (evt) => {
			actionKeys[evt.code] && actionKeys[evt.code](context);
		} }
	/>;

export default textBox;
