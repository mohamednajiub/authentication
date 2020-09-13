import React, { createContext } from 'react';
import Login from './components/Login';
import AppHeader from './components/AppHeader/AppHeader';

import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Logos from './components/Logos/Logos';

const useStyles = makeStyles({
	container: {},
});
const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<AppHeader />
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/Register' render={(props) => <h1>hi Register</h1>} />
			</Switch>
			<Logos />
		</div>
	);
};

export default App;
