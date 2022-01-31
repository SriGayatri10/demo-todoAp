import AddButton from './addButton.js';
import editButton from './editButton.js';

const actionButton = (context) => (context.state.editing
	? editButton()
	: AddButton());

export default actionButton;
