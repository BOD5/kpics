import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import serverConfig from '../../../config/server.js';
import models from '../index.js';

// eslint-disable-next-line no-sync
// const salt = bcrypt.genSaltSync(10);

export default {
	Query: {
		getUsersByType: async (parent, args, context, info) => {
			console.log('models', models);

			return await models.user.findAll({where: args});
		},
	},
	Mutation: {
		registrateUser: async (parent, { input }, context, info) => {
			const password = input.password;
			const login = input.login;
			const email = input.email;
			const user = await models.user.findOne({ where: { email }});
			if (!user) {
				const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds);
		
				return await models.user.create({
					login,
					email,
					password: passwordHashed,
					role: 'User'
				});		
			} else {
				throw new Error(`The email ${email} is already registred. Please try to login.`);
			}
		},
		authorizeUser: async (parent, { input }, context, info) => {
			const email = input.email;
			const password = input.password;
			const login = input.login;
			const user = await models.user.findOne({where: { email }});
			if(!user) {
				throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`);
			} else {
				const userDetails = user.dataValues;

				const passwordMatch = await bcrypt.compare(password, userDetails.password);

				if(!passwordMatch) {
					throw new Error('Sorry, the password you entered is incorrect. Please try again.');
				} else {
					const userDetailsToken = {
						id: userDetails.id,
						login: userDetails.login,
						email: userDetails.email,
						role: userDetails.role
					};
					console.log('secret key ', serverConfig.secret);
					return {
						user: userDetails,
						token: jwt.sign(userDetailsToken, serverConfig.secret)
					};
				}
			}
		},
		changeRole: async (parent, { id, role }, context, info) => {
			console.log(`id: ${id} role: ${role}`);
			const user = await models.user.findOne({where: { id: id }});
			user.update({ role: role });
			
			return user;
		}
	}
};