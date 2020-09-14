import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Declerations/ScssModule.d.ts';
import 'react-app-polyfill/ie9';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './utils/theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
