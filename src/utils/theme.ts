import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#207DAB',
		},
		secondary: {
			main: '#424242',
		},
		success: {
			main: '#7CA841',
		},
		error: {
			main: '#811518',
		},
		info: {
			main: '#6B2C8B',
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

export default theme;
