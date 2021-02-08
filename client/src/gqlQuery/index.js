import { gql } from '@apollo/client';

export const selectTournaments = gql`
	query selectTournaments {
		tournaments{
			id
			title
			caption
		}
	}
`;