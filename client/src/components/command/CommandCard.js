import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Typography } from '@material-ui/core';

const CommandCard = (props) => {
	const command = props.command;

	return (
		<div>
			<Typography>
				{command.title}
			</Typography>
			<Divider />
			<Typography>
				{command.caption}
			</Typography>
			<Button>
				Read more
			</Button>
		</div>
	);
};

CommandCard.propTypes = {
	command: PropTypes.object,
};

export default CommandCard;