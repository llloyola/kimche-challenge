import React from "react";
import propTypes from "prop-types";

function Inputs({ setInput, setByContinent }) {
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		setByContinent();
	};

	return (
		<div id="inputs">
			<input type="text" placeholder="Search..." onChange={(e) => handleChange(e)} />
			<label className="switch">
				<input type="checkbox" onClick={() => handleClick()} />
				<span className="slider" />
			</label>
		</div>
	);
}

Inputs.propTypes = {
	setInput: propTypes.func.isRequired,
	setByContinent: propTypes.func.isRequired
};

export default Inputs;
