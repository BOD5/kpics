import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Container, Toolbar, Typography } from '@material-ui/core';

import img from '../img/right.jpg';
import TournamentDetail from './Tournament/TournamentDetail';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundImage: img
	},
	back: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: 'white',
		backgroundColor: 'gray',
	},
	content: {
		backgroundColor: 'gray',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		// paddingTop: '1rem',
		[theme.breakpoints.up('md')] :{
			maxWidth: 'md',
		},
		[theme.breakpoints.down('md')]:{
			maxWidth: 'full',
			padding: 0,
		}
	}
}));

const ContentComponent = (props) => {
	const classes = useStyles();

	const tournament = {
		title: 'title',
		caption: 'caption',
	};

	return (
		<div className={classes.root}>
			<Toolbar />
			<Box>
				<Grid item xs={12}>
					<Paper className={classes.back}>xs=12</Paper>
				</Grid>
				<Container  className={classes.content}>
					<TournamentDetail tournament={tournament}/>						{/* delete */}
					{props.children}
				</Container>
				<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
			</Box>
		</div>
	);
};

ContentComponent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default ContentComponent;