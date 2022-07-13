import React from "react";
import propTypes from "prop-types";
import "./Country.scss";

function Country({ country: { name, capital, currency, languages } }) {
	return (
		<div className="country">
			<p className="name">{name}</p>
			<p className="capital">{capital}</p>
			<p className="currency">{currency}</p>
			<p className="languages">{languages.map((lang) => lang.name).join(", ")}</p>
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
