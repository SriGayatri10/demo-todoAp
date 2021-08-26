/* eslint-disable react/void-dom-elements-no-children */
import { React } from 'react';

const todoDisplay = (data) =>
	<div key={ data.id }>
		<input
			type="checkbox"
			checked={ data.isCompleted }
		/>
		<span>{data.text}</span>
	</div>;

export default todoDisplay;
