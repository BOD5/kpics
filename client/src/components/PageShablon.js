import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './menu/TopBar';
import LeftNavigationPanel from './LeftNavigationPAnel';



const PageShablon = () => {
	const [menu, setMenu] = React.useState(false);

	return (
		<div >
			<CssBaseline />
			<TopBar openMenu={setMenu} isMenu={menu}/>
			<LeftNavigationPanel isOpen={menu}/>
		</div>
	);
};

export default PageShablon;