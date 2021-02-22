import { gql } from '@apollo/client';

const authorize = gql`
	mutation logUs($LogInp: authorizeInput!) {
		authorizeUser(input: $LogInp) {
			token
		}
	}
`;

export default authorize;