/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const Checkbox = () =>
	<input
		type="checkbox"
		onChange={ () =>
		// console.log(evt);

			 context.actions.checkbox() }
	/>;

export default Checkbox;