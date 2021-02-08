import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const LogInDialog = (props) => {
	
	const show = props.show;
	console.log(show);
	const authF = props.success;
	const setOpen = props.isOpen;

	const handleClose = () => {
		setOpen(false);
	};

	const sucssesAuth = () => {
		authF(true);
	};

	return (
		<div>
			<Dialog open={show} onClose={handleClose} aria-labelledby="form-dialog-title"> {/* aria-labelledby - название окна */}
				<DialogTitle id="form-dialog-title">Вхід </DialogTitle>
				<DialogContent>
					<DialogContentText>
            Для входу введіть емейл та пароль
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
            Відмінити
					</Button>
					<Button onClick={sucssesAuth} color="primary">
            Прийняти
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

LogInDialog.propTypes = {
	success: PropTypes.func,
	show: PropTypes.bool,
	isOpen: PropTypes.func
};

export default LogInDialog;