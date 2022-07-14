import React, { useState } from "react";
import propTypes from "prop-types";
import "./Inputs.scss";

function Inputs({ setInput, setByContinent }) {
	const [groupByContinent, setGroupByContinent] = useState(true);
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		setByContinent();
		setGroupByContinent(!groupByContinent);
	};

	return (
		<div id="inputs">
			<div id="search">
				<input
					type="text"
					id="searchTerm"
					placeholder="What country are you looking for?"
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div id="switch">
				<p>Group by:</p>
				<button type="button" onClick={() => handleClick()}>
					{groupByContinent ? "Continent" : "Language"}
				</button>
			</div>
		</div>
	);
}

Inputs.propTypes = {
	setInput: propTypes.func.isRequired,
	setByContinent: propTypes.func.isRequired
};

export default Inputs;
