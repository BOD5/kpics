import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import { client } from '../../utils';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { gql } from '@apollo/client';

const AUTHORIZE = gql`
	query ($LogInp: authorizeInput!) {
		authorizeUser(input: $LogInp) {
			user {
				role
			}
			token
		}
	}
`;

const LogInDialog = (props) => {
	const { authUser } = React.useContext(Context);
	
	const show = props.show;
	console.log('client --- ', client);
	const authF = props.success;
	const setOpen = props.isOpen;
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [loading, setLoading] = useState(false);
	// const {loading, error, data} = useQuery(AUTHORIZE, {variables: { LogInp: {email: email, password: pass} }});
	const handleClose = () => {
		setOpen(false);
	};
	
	const sucssesAuth = async () => {
		try {
			console.log('some -- ', {email, pass});
			console.log(' - client:43 >', client); // eslint-disable-line no-console
			const { data } = await client.query({
				query: AUTHORIZE,
				variables: { LogInp: {email: email, password: pass} },
			});
	
	
			
			// if (loading) console.log('loading');
			// if (error) {
			// 	console.log('error --- ', error);
			// }
			if(data) {
				console.log('auth data --- ', data);
				localStorage.token = data.authorizeUser.token;
				localStorage.role = authUser.data.role;
				authF(true);
			}
		} catch (e) {
			throw new Error(e);
		}
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
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
						onChange={(e) => setPass(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
            Відмінити
					</Button>
					<Button
						disabled={loading}
						loading={loading}
						onClick={async () => {
							setLoading(true);
							await sucssesAuth();
							setLoading(false);
						}}
						color="primary"
					>
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