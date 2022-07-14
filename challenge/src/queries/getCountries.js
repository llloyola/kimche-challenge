import { gql } from "@apollo/client";

export default gql`
	query GetCountries {
		countries {
			code
			name
			native
			phone
			capital
			currency
			languages {
				name
			}
			continent {
				code
				name
			}
			states {
				name
			}
		}
	}
`;
