const input = ({ data }) => ({
	input: data,
});

const todo = ({ state }) => ({
	todo: state.todo.concat(state.input),
});
const actions = {
	input,
	todo,

};

export default actions;
