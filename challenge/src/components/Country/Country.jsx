import React from "react";
import propTypes from "prop-types";
import "./Country.scss";
import countryFlagEmoji from "country-flag-emoji";

function Country({ country: { code, name, capital, native, phone, currency, languages, states } }) {
	return (
		<div className="country">
			<p className="name">
				{countryFlagEmoji.get(code).emoji} {name} <br /> ({native})
			</p>
			<p className="capital">
				<strong>Capital:</strong> {capital || "No capital"}
			</p>
			<p className="phone">
				<strong>Phone:</strong> {phone || "No capital"}
			</p>
			<p className="currency">
				<strong>Currency:</strong> {currency ? currency.replace(/,/g, ", ") : "No currency"}
			</p>
			<p className="languages">
				<strong>Languages:</strong>{" "}
				{languages.length ? languages.map((lang) => lang.name).join(", ") : "No language"}
			</p>
			{states.length ? (
				<p className="states">
					<strong>States:</strong> {states.map((state) => state.name).join(", ")}
				</p>
			) : null}
		</div>
	);
}

Country.propTypes = {
	country: propTypes.shape({
		code: propTypes.string.isRequired,
		name: propTypes.string.isRequired,
		native: propTypes.string,
		phone: propTypes.string,
		capital: propTypes.string,
		currency: propTypes.string,
		languages: propTypes.arrayOf(propTypes.shape({ name: propTypes.string })),
		states: propTypes.arrayOf(propTypes.shape({ name: propTypes.string }))
	}).isRequired
};

export default Country;
