import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Declerations/ScssModule.d.ts';
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
		error: {
			main: 'hsl(358 72% 42% / 1)',
		},
		success: {
			main: '#7CA841',
		},
		info: {
			main: '#000',
		},
	},

	typography: {
		fontFamily: ['Cairo', 'sans-serif'].join(','),
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightBold: 700,
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
