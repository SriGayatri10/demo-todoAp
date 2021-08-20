import { React, useEffect } from 'react';
import './App.scss';
// import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import Textbox from './components/textBox';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<span className="App">
			<span>{ Textbox() }</span>
			<span>{ SimpleButton() }</span>
		</span>
	);
};

export default App;
