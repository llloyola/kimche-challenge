import React from "react";
import propTypes from "prop-types";
import "./Country.scss";
import countryFlagEmoji from "country-flag-emoji";

function Country({ country: { code, name, capital, currency, languages } }) {
	return (
		<div className="country">
			<p className="name">
				{countryFlagEmoji.get(code).emoji} {name}
			</p>
			<p className="capital">
				<strong>Capital:</strong> {capital || "No capital"}
			</p>
			<p className="currency">
				<strong>Currency:</strong> {currency ? currency.replace(/,/g, ", ") : "No currency"}
			</p>
			<p className="languages">
				<strong>Languages:</strong> {languages.map((lang) => lang.name).join(", ")}
			</p>
		</div>
	);
}

Country.propTypes = {
	country: propTypes.shape({
		code: propTypes.string,
		name: propTypes.string,
		capital: propTypes.string,
		currency: propTypes.string,
		languages: propTypes.arrayOf(propTypes.shape({ name: propTypes.string }))
	}).isRequired
};

export default Country;
