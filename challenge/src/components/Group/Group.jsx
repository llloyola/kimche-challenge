import React from "react";
import propTypes from "prop-types";
import Country from "../Country/Country";
import "./Group.scss";

function Group({ groupName, countries }) {
	return (
		<div className="group">
			<div className="groupTitle">
				<h2 key="groupTitle">{groupName}</h2>
			</div>
			<div className="countries">
				{countries.map((country) => (
					<Country key={country.name} country={country} />
				))}
			</div>
		</div>
	);
}

Group.propTypes = {
	groupName: propTypes.string.isRequired,
	countries: propTypes.arrayOf(
		propTypes.shape({
			name: propTypes.string.isRequired,
			native: propTypes.string,
			phone: propTypes.string,
			capital: propTypes.string,
			currency: propTypes.string,
			languages: propTypes.arrayOf(propTypes.shape({ name: propTypes.string })),
			states: propTypes.arrayOf(propTypes.shape({ name: propTypes.string }))
		})
	).isRequired
};

export default Group;
