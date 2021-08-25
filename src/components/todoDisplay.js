/* eslint-disable react/void-dom-elements-no-children */
import { React } from 'react';
import context from '../core/context';

const todoDisplay = (data) => <div>
	<input
		type="checkbox"
		onClick={ () =>
			context.actions.checkbox(1) }
	/>
	<span key={ data.id }>{data.text}</span>
</div>;

export default todoDisplay;
