import { React } from 'react';

const todoDisplay = (data) => <div key={ data.id }>{data.text}</div>;

export default todoDisplay;
