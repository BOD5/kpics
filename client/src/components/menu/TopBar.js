import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import LogInDialog from '../modal/LogIn';
import Context from '../../context';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: 'gray',
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		zIndex: theme.zIndex.drawer + 1,
	},
	grayBnt: {
		backgroundColor: 'gray',
		color: 'white',
	},
}));

const TopBar = (props) => {
	const classes = useStyles();
	const { authUser } = React.useContext(Context);
	const auth = authUser.state.auth;
	const setAuth = authUser.state.setAuth;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const [showLogin, setShowL] = React.useState(false);
	
	const setMenu = props.openMenu;
	const menu = props.isMenu;
	
	const handleShowLogin = () => {
		setShowL(true);
	};

	const handleChange = () => {
		setAuth(!auth);
		if (!auth) handleClose();
		setShowL(false);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpenMenu = () => {
		setMenu(!menu);
	};
	
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={classes.appBar}
			>
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleOpenMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
            Home
					</Typography>
					{!auth && (
						<div>
							<ButtonGroup disableElevation variant="contained" color="primary">
								<Button color='primary' className={classes.grayBnt} variant='outlined' onClick={handleShowLogin}> Log In</Button>
								<Button color='primary' className={classes.grayBnt} variant='contained' onClick={handleChange}> Sign Up</Button>
							</ButtonGroup>
						</div>
					)}
					{auth && (
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
								<MenuItem onClick={handleChange}>Log Out</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
			<LogInDialog show={showLogin} success={handleChange} isOpen={setShowL}/>
		</div>
	);
};

TopBar.propTypes = {
	openMenu: PropTypes.func,
	isMenu: PropTypes.bool,
};


export default TopBar;