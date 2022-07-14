import React from "react";
import propTypes from "prop-types";
import "./Country.scss";

function Country({ country: { name, capital, currency, languages } }) {
	return (
		<div className="country">
			<p className="name">{name}</p>
			<p className="capital">
				<strong>Capital:</strong> {capital}
			</p>
			<p className="currency">
				<strong>Currency:</strong> {currency}
			</p>
			<p className="languages">
				<strong>Languages:</strong> {languages.map((lang) => lang.name).join(", ")}
			</p>
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
