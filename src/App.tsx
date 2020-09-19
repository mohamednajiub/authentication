import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import AppHeader from './components/AppHeader/AppHeader';
import Logos from './components/Logos/Logos';
import Registration from './components/Registration';

const App = () => {

	return (
		<div>
			<AppHeader />
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Registration} />
			</Switch>
			<Logos />
		</div>
	);
};

export default App;
