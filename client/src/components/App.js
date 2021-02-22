import React from 'react';
import { BasePage } from '../pages/base/basePage';
import Context from '../context';
import {
	ApolloProvider
} from '@apollo/client';

import { client } from '../utils';



const App = () => {
	const [isAuth, setAuth] = React.useState(false);
	const [userData, setData] = React.useState({});
	const authUser = {
		state: {
			auth: isAuth,
			setAuth: setAuth
		},
		data: userData,
		setData: setData,
	};

	return (
		<ApolloProvider client={client}>
			<Context.Provider value={{ authUser, client }}>
				<div>
					<BasePage />
				</div>
			</Context.Provider>
		</ApolloProvider>
	);
};

export default App;
