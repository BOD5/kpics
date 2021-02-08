import React from 'react';
import { BasePage } from '../pages/base/basePage';
import Context from '../context';

const App = () => {
	const [isAuth, setAuth] = React.useState(false);
	const [userData, setData] = React.useState({
		userName: 'ebb',
		id: 1,
		type: 'Admin'
	});
	const authUser = {
		state: {
			auth: isAuth,
			setAuth: setAuth
		},
		data: userData,
		setData: setData,
	};

	return (
		<Context.Provider value={{authUser}}>
			<div>
				<BasePage />
			</div>
		</Context.Provider>
	);
};

export default App;
