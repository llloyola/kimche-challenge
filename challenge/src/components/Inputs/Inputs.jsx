import React from "react";
import propTypes from "prop-types";
import "./Inputs.scss";

function Inputs({ setInput, setByContinent }) {
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		setByContinent();
	};

	return (
		<div id="inputs">
			<div id="search">
				<input
					type="text"
					id="searchTerm"
					placeholder="What are you looking for?"
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div id="switch">
				<label className="switchLabel">
					<input type="checkbox" onClick={() => handleClick()} />
					<span className="slider round" />
				</label>
			</div>
		</div>
	);
}

Inputs.propTypes = {
	setInput: propTypes.func.isRequired,
	setByContinent: propTypes.func.isRequired
};

export default Inputs;
