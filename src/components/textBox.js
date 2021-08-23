/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const Input = () =>
	<input
		type="text"
		onChange={ (evt) =>
		// console.log(evt);

			 context.actions.input(evt.target.value) }
	/>;

export default Input;
