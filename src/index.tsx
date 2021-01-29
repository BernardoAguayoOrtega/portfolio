import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const root = document.getElementById('root');

render(
	<>
		<h1>Im alive</h1>
		<App />
	</>,
	root,
);
