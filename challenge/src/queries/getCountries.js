import { gql } from "@apollo/client";

export default gql`
	query GetCountries {
		countries {
			code
			name
			capital
			currency
			languages {
				name
			}
			continent {
				code
				name
			}
		}
	}
`;
