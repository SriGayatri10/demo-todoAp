/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const textBox = () =>
	<input
		type="text"
		 value={ context.state.input }
		onChange={ (evt) => {
			 console.log(evt);

			 context.actions.setInput(evt.target.value);
		} }
	/>;

export default textBox;
