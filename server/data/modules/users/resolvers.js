// Imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// App Imports
import serverConfig from '../../config/server';
import models from '../../setup/models';

// Create
export const create = async (parrent, { name, email, password }) =>{
	const user = await models.user.findOne({ where: { email }});
	if (!user) {
		const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds);
		
		return await models.user.create({
			name,
			email,
			password: passwordHashed
		});		
	} else {
		throw new Error(`The email ${email} is already registred. Please try to login.`);
	}
};

export const login = async (parent, { email, password }) => {
	const user = await models.user.findOne({where: { email }});

	if(!user) {
		throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`);
	} else {
		const userDetails = user.get();

		const passwordMatch = await bcrypt.compare(password, userDetails.password);

		if(!passwordMatch) {
			throw new Error('Sorry, the password you entered is incorrect. Please try again.');
		} else {
			const userDetailsToken = {
				id: userDetails.id,
				name: userDetails.name,
				email: userDetails.email,
				role: userDetails.role
			};

			return {
				user: userDetails,
				token: jwt.sign(userDetailsToken, serverConfig.secret)
			};
		}
	}
};

export const getById = async (parent, { id }) => {
	return await models.user.findOne({where: { id }});
};

export const getAll = async () => {
	return await models.user.findAll();
};

export const remove = async (parentValue, { id }) => {
	return await models.User.destroy({ where: { id } });
};
