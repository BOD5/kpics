import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

const AuthUserMenu = () => {
	const { authUser } = React.useContext(Context);
	const auth = authUser.state.auth;
	const setAuth = authUser.state.setAuth;
	const userData = authUser.data;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logOut = () => {
		setAuth(false);
		authUser.setData({});
	};
	console.log(' - :21 -> userData', userData); // eslint-disable-line no-console

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="inherit"
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={logOut}>Log Out</MenuItem>
			</Menu>
		</div>
	);
};

export default AuthUserMenu;