import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PageShablon from '../../components/PageShablon';
import { Container } from '@material-ui/core';
import ContentComponent from '../../components/ContentComponent';
import TournamentCard from '../../components/TournamentCard';

import img from '../../img/left.jpg';

export const BasePage = () => {
	const tournament = {
		image: img,
		title: 'Eba',
		caption: 'best tournament of kpi'
	};
	const test = new Array(33);
	for (let i=0; i < 33; i++) {
		test.push(<TournamentCard tournamentInfo={tournament} />);
	}
	console.log('test', test);
	return (
		<div>
			<PageShablon />
			<ContentComponent>
				{test}
			</ContentComponent>
		</div>
	);
};
