import React from "react";
import propTypes from "prop-types";
import groupResults from "../../utils/groupResults";
import Group from "../Group/Group";
import "./Result.scss";

function Result({ countries, inputs }) {
	return (
		<div id="result">
			{Object.entries(groupResults(countries, inputs.byContinent))
				.sort((groupA, groupB) => {
					if (groupA[0] < groupB[0]) return -1;
					if (groupA[0] > groupB[0]) return 1;
					return 0;
				})
				.map(([key, value]) => [
					key,
					value.filter((country) => country.name.toLowerCase().includes(inputs.input.toLowerCase()))
				])
				.filter((elem) => elem[1].length)
				.map(([key, value]) => (
					<Group key={key} groupName={key} countries={value} />
				))}
		</div>
	);
}

Result.propTypes = {
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
	).isRequired,
	inputs: propTypes.shape({
		input: propTypes.string,
		byContinent: propTypes.bool
	}).isRequired
};

export default Result;
