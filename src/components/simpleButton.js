import { React } from 'react';
// import config from '../core/config';
import context from '../core/context';

const SimpleButton = () =>
	<button
		onClick={ () => {
			context.actions.todo();
			// context.actions.input('');
		} }
	>
		Add
	</button>;

export default SimpleButton;
