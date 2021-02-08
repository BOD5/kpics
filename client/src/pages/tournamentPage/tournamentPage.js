import React from 'react';
import PropTypes from 'prop-types';

const TournamentPage = (props) => {

	const Tournament = props.tournament;

	return (
		<div>
			<h1>{Tournament.title}</h1>
			<h2>{Tournament.caption}</h2>
		</div>
	);
};

TournamentPage.propTypes = {
	tournament: PropTypes.object,
};

export default TournamentPage;