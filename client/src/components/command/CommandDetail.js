import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Dialog,
	Typography,
	DialogTitle,
	DialogContent
} from '@material-ui/core';

const CommandDetail= (props) => {

	const show = props.show;
	const command = props.command;
	const setOpen = props.isOpen;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={show} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>
					{command.title}
				</DialogTitle>
				<DialogContent dividers>
					<Typography>
						{command.caption}
					</Typography>
				</DialogContent>
			</Dialog>
			<Button>
				Read more
			</Button>
		</div>
	);
};

CommandDetail.propTypes = {
	command: PropTypes.object,
	show: PropTypes.bool,
	isOpen: PropTypes.func
};

export default CommandDetail;