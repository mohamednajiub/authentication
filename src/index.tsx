import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-app-polyfill/ie9';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#207DAB',
		},
		secondary: {
			main: '#424242',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
