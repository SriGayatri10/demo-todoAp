import context from '../core/context';
import addButton from './addButton.js';
import editButton from './editButton.js';

const actionButton = () => (context.state.editing
	? editButton()
	: addButton());

export default actionButton;
