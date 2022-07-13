import React from "react";
import propTypes from "prop-types";

function Country({ country: { name, capital, currency, languages } }) {
	return (
		<div key={name}>
			<p key="name">{name}</p>
			<p key="capital">{capital}</p>
			<p key="currency">{currency}</p>
			<p key="languages">{languages.map((lang) => lang.name).join(", ")}</p>
			<br />
		</div>
	);
}

Country.propTypes = {
	country: propTypes.shape({
		name: propTypes.string,
		capital: propTypes.string,
		currency: propTypes.string,
		languages: propTypes.arrayOf(propTypes.shape({ name: propTypes.string }))
	}).isRequired
};

export default Country;
