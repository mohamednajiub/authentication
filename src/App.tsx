import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import AppHeader from './components/AppHeader/AppHeader';
import Logos from './components/Logos/Logos';

const App = () => {

	return (
		<div>
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
